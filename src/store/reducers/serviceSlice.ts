import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "../store";
import { getRequest } from "../../services";

export type Service = {
  id: number;
  title: string;
  body: string;
  url?: string;
};

type ServicesState = {
  loading: boolean;
  error: string | null;
  list: Service[];
};

const initialState: ServicesState = {
  list: [],
  error: null,
  loading: false,
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const fetchServices = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(fetchServiceStart());
  try {
    const response = await getRequest(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch(fetchServiceSuccess(response));
  } catch (error) {
    dispatch(fetchServiceFailure("Fetching Services Failed"));
  }
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    fetchServiceStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchServiceSuccess(state, action: PayloadAction<Service[]>) {
      state.loading = false;
      state.list = action.payload;
    },
    fetchServiceFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default servicesSlice.reducer;
export const { fetchServiceStart, fetchServiceFailure, fetchServiceSuccess } =
  servicesSlice.actions;

export const selectServices = (state: RootState) => state.services.list;
export const selectServicesLoading = (state: RootState) =>
  state.services.loading;
export const selectServicesError = (state: RootState) => state.services.error;

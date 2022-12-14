import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the initial state of your slice
const initialState = {
    data: [],
    isFetching: false,
    error: null,
};

// Define the types for the slice and its actions
interface FetchState {
    data: any[];
    isFetching: boolean;
    error: any;
}

interface FetchRequestAction {
    type: string;
}

interface FetchSuccessAction {
    type: string;
    payload: any;
}

interface FetchFailureAction {
    type: string;
    error: any;
}

type Action = FetchRequestAction | FetchSuccessAction | FetchFailureAction | PayloadAction;

// Create the slice
const fetchSlice = createSlice({
    name: "fetch",
    initialState,
    reducers: {
        // Handle the FETCH_REQUEST action
        fetchRequest: (state: FetchState) => {
            state.isFetching = true;
            state.error = null;
        },

        // Handle the FETCH_SUCCESS action
        fetchSuccess: (
            state: FetchState,
            action: PayloadAction<any>
        ) => {
            state.data = action.payload;
            state.isFetching = false;
            state.error = null;
        },

        // Handle the FETCH_FAILURE action
        fetchFailure: (state: FetchState, action: PayloadAction<FetchFailureAction>) => {
            state.data = [];
            state.isFetching = false;
            state.error = action.payload;
        },
    },
});

// Export the actions and the reducer
export const { fetchRequest, fetchSuccess, fetchFailure } = fetchSlice.actions;
export default fetchSlice.reducer;



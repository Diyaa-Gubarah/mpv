import { AnyAction, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { getRequest } from '../../services';

export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST';
export type FETCH_SERVICES_REQUEST = typeof FETCH_SERVICES_REQUEST;

export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export type FETCH_SERVICES_SUCCESS = typeof FETCH_SERVICES_SUCCESS;

export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';
export type FETCH_SERVICES_FAILURE = typeof FETCH_SERVICES_FAILURE;



export type Service = {
    body: string;
    url: string;
    title: string;
}


export interface ServiceState {
    services: Service[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: ServiceState = {
    services: null,
    loading: false,
    error: null
};




export const fetchServices = createAsyncThunk(
    'services/fetchServices',
    async (args: void, thunkAPI) => {
        try {
            thunkAPI.dispatch(actions.fetchServiceRequest());
            const data: Record<string, Service[]> = await getRequest("http://192.168.100.156:5005/api/services")
            thunkAPI.dispatch(actions.fetchServiceSuccess(data.services));
        } catch (error) {
            thunkAPI.dispatch(actions.fetchServiceFailure(error));
        }
    }
);


const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        fetchServiceRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchServiceSuccess: (state, action: PayloadAction<Service[]>) => {
            state.services = action.payload;
            state.loading = false;
        },
        fetchServiceFailure: (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});



export default serviceSlice.reducer;
export const { actions } = serviceSlice;

export const selectServices = (state: RootState) => state.services.services
export const selectServicesLoading = (state: RootState) => state.services.loading
export const selectServicesError = (state: RootState) => state.services.error


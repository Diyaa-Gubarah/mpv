import { ThunkAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { getRequest } from "../../services";

export interface Service {
    title: string;
    url: string;
    body: string
}

// Define the initial state of your slice
interface initialState {
    services: Service[],
    isFetching: boolean,
    error: unknown,
};




const initialState = {
    services: [],
    fetching: false,
    error: null
};


const serviceSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        setServices: (state, action) => {
            return {
                ...state,
                services: action.payload
            }
        },
        setFetching: (state, action) => {
            return {
                ...state,
                fetching: action.payload
            }
        },
        setError: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        }
    }
});




export default serviceSlice.reducer;
export const { actions } = serviceSlice;

export const selectServices = (state: RootState) => state.services.services
export const selectServicesLoading = (state: RootState) => state.services.fetching
export const selectServicesError = (state: RootState) => state.services.error


export const fetchServices = (): ThunkAction<void, initialState, null, any> => async dispatch => {
    try {
        // make API call to fetch services
        dispatch(actions.setFetching(true))
        const { services } = await getRequest("http://192.168.100.156:5005/api/services")

        // dispatch action to set the user data
        dispatch(actions.setServices(services));
    } catch (err) {
        // handle error

        actions.setError(err)

    }
    dispatch(actions.setFetching(false))

};





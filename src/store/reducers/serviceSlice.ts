import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosResponse } from 'axios';
import { RootState } from './../store';
import { getRequest } from "../../services";

export type Service = {
    id: number;
    title: string;
    body: string;
    url?: string
};


// features/services/todoSlice.ts

type ServicesState = {
    // In `status` we will watch
    // if services are being loaded.
    loading: boolean;

    // `error` will contain an error message.
    error: string | null;
    list: Service[];
};

const initialState: ServicesState = {
    list: [],
    error: null,
    loading: false
};


// features/services/fetchServices.ts
// ...

// This type describes the error object structure:
type FetchServicesError = {
    message: string;
};

// The third type-parameter is an object with:
// `{dispatch?, state?, extra?, rejectValue?}`` fields.
//
// `extra` is useful when we need to pass 
// some static data to the request function,
// like jwt-token or HTTP-headers.
//
// `rejectValue` is useful when we need to type 
// possible errors.
export const fetchServices = createAsyncThunk<
    Service[],
    undefined,
    { rejectValue: FetchServicesError }
>(
    "services/fetch",
    // The second argument, `thunkApi`, is an object
    // that contains all those fields
    // and the `rejectWithValue` function:
    async (args: unknown, thunkApi) => {
        const response: Service[] = await getRequest('https://jsonplaceholder.typicode.com/posts');

        // Check if status is not okay:
        if (!Array.isArray(response)) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to fetch services."
            });
        } else {
            return response;

        }

    }
);
// ...

export const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        // ...
    },
    extraReducers: (builder) => {

        // When we send a request,
        // `fetchServices.pending` is being fired:
        builder.addCase(fetchServices.pending, (state) => {
            // At that moment,
            // we change status to `loading` 
            // and clear all the previous errors:
            state.loading = true
            state.error = null;
        });

        // When a server responses with the data,
        // `fetchServices.fulfilled` is fired:
        builder.addCase(fetchServices.fulfilled,
            (state, { payload }) => {
                // We add all the new services into the state
                // and change `status` back to `idle`:
                state.list.push(...payload);
                state.loading = false
            });

        // When a server responses with an error:
        builder.addCase(fetchServices.rejected,
            (state, { payload }) => {
                // We show the error message
                // and change `status` back to `idle` again.
                if (payload) state.error = payload.message;
                state.loading = false
            });
    },
});


export default servicesSlice.reducer;
export const { actions } = servicesSlice;

export const selectServices = (state: RootState) => state.services.list
export const selectServicesLoading = (state: RootState) => state.services.loading
export const selectServicesError = (state: RootState) => state.services.error
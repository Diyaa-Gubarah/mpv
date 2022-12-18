import { AnyAction, Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { getRequest } from '../../services';

interface GalleryState {
    images: string[];
    loading: boolean;
    error: string | null;
}

const initialState: GalleryState = {
    images: [],
    loading: false,
    error: null,
};




export function fetchImages() {
    return async (dispatch: Dispatch) => {
        dispatch(fetchImagesStart());
        try {
            const response = await getRequest('/api/images');
            dispatch(fetchImagesSuccess(response));
        } catch (error) {
            dispatch(fetchImagesFailure(error as string));
        }
    };
}


const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        fetchImagesStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchImagesSuccess(state, action: PayloadAction<string[]>) {
            state.loading = false;
            state.images = action.payload;
        },
        fetchImagesFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchImagesStart, fetchImagesSuccess, fetchImagesFailure } = gallerySlice.actions;

export default gallerySlice.reducer;




export const selectGallerys = (state: RootState) => state.services.list
export const selectGallerysLoading = (state: RootState) => state.services.loading
export const selectGallerysError = (state: RootState) => state.services.error

import { AnyAction, Dispatch, PayloadAction, createSlice, ThunkAction, Action } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getRequest } from '../../services';

export interface Image {
    id: string;
    author: string;
    url: string;
    download_url?: string;
}

interface GalleryState {
    images: Image[];
    loading: boolean;
    error: string | null;
}

const initialState: GalleryState = {
    images: [],
    loading: false,
    error: null,
};

// Define the ThunkAction type
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export function fetchImages(): AppThunk {
    return async (dispatch) => {
        dispatch(fetchImagesStart());
        try {
            const response = await getRequest('https://picsum.photos/v2/list');
            dispatch(fetchImagesSuccess(response));
        } catch (error) {
            dispatch(fetchImagesFailure('Fetching Images Failed'));
        }
    };
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        fetchImagesStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchImagesSuccess: (state, action: PayloadAction<Image[]>) => {
            state.loading = false;
            state.images = action.payload;
        },
        fetchImagesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchImagesStart, fetchImagesSuccess, fetchImagesFailure } = gallerySlice.actions;

export default gallerySlice.reducer;

export const selectGallerys = (state: RootState) => state.gallery.images;
export const selectGallerysLoading = (state: RootState) => state.gallery.loading;
export const selectGallerysError = (state: RootState) => state.gallery.error;

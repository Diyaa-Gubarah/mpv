import { counterReducer, serviceReducer, useReducer } from './reducers/index'

import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    middleware: [thunkMiddleware],

    reducer: {
        services: serviceReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
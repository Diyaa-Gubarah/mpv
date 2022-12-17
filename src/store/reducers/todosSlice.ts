import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from './../store';

export type Todo = {
    id: number;
    title: string;
    body: string;
    url?: string
};


// features/todos/todoSlice.ts

type TodosState = {
    // In `status` we will watch
    // if todos are being loaded.
    loading: boolean;

    // `error` will contain an error message.
    error: string | null;
    list: Todo[];
};

const initialState: TodosState = {
    list: [],
    error: null,
    loading: false
};


// features/todos/fetchTodos.ts
// ...

// This type describes the error object structure:
type FetchTodosError = {
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
export const fetchTodos = createAsyncThunk<
    Todo[],
    number,
    { rejectValue: FetchTodosError }
>(
    "todos/fetch",
    // The second argument, `thunkApi`, is an object
    // that contains all those fields
    // and the `rejectWithValue` function:
    async (limit: number, thunkApi) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');


        // Check if status is not okay:
        if (response.status !== 200) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to fetch todos."
            });
        } else {
            const data: Todo[] = await response.json()
            return data;

        }

    }
);
// ...

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // ...
    },

    // In `extraReducers` we declare 
    // all the actions:
    extraReducers: (builder) => {

        // When we send a request,
        // `fetchTodos.pending` is being fired:
        builder.addCase(fetchTodos.pending, (state) => {
            // At that moment,
            // we change status to `loading` 
            // and clear all the previous errors:
            state.loading = true
            state.error = null;
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchTodos.fulfilled,
            (state, { payload }) => {
                // We add all the new todos into the state
                // and change `status` back to `idle`:
                state.list.push(...payload);
                state.loading = false
            });

        // When a server responses with an error:
        builder.addCase(fetchTodos.rejected,
            (state, { payload }) => {
                // We show the error message
                // and change `status` back to `idle` again.
                if (payload) state.error = payload.message;
                state.loading = false
            });
    },
});


export default todosSlice.reducer;
export const { actions } = todosSlice;

export const selectTodos = (state: RootState) => state.todos.list
export const selectTodosLoading = (state: RootState) => state.todos.loading
export const selectTodosError = (state: RootState) => state.todos.error
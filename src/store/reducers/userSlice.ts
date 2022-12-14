import { ThunkAction, createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
}

// Define the initial state of your slice
interface initialState {
  user: User[],
  isFetching: boolean,
  error: unknown,
};



const initialState = {
  users: []
};


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  }
});




export default userSlice.reducer;
export const { actions } = userSlice;

export const fetchUsers = (): ThunkAction<void, typeof initialState, null, any> => async dispatch => {
  try {
    // make API call to fetch users
    const response = await fetch("https:www.user.con");
    const users = await response.json();

    // dispatch action to set the user data
    dispatch(actions.setUsers(users));
  } catch (err) {
    // handle error
  }
};

export const setUsers = (users: User[]): ThunkAction<void, typeof initialState, null, any> => dispatch => {
  dispatch(actions.setUsers(users));
};




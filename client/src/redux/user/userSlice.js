import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

// create slice:
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // sign in start:
    signInStart: (state) => {
      state.loading = true;
    },

    // sign in success:
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    // sign in failure:
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // update start:
    updateUserStart: (state) => {
      state.loading = true;
    },
    // update success:
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    // update failure:
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} = userSlice.actions;

export default userSlice.reducer;

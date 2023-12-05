import { configureStore, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadingUserSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.user = action.payLoad;
  },
  LoadUserFail: (state, action) => {
    state.isAuthenticated = false;
    state.loading = false;
    state.error = action.payLoad;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
});

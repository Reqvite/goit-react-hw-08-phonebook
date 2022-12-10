import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { login, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        toast.success('You have successfully registered.');
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        toast.error(action.payload, {
          duration: 2000,
        });
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        toast.success(`Welcome, ${action.payload.user.name}`);
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        toast.error(action.payload, {
          duration: 2000,
        });
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;

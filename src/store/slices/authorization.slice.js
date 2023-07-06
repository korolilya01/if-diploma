import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { authState } = INITIAL_STATE;

const authSlice = createSlice({
  name: 'authorization',
  initialState: authState,
  reducers: {
    registration: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { registration } = authSlice.actions;
export const authReducer = authSlice.reducer;

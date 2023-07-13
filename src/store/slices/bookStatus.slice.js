import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { status } = INITIAL_STATE;

const bookStatusSlice = createSlice({
  name: 'bookStatus',
  initialState: status,
  reducers: {
    addBookStatusSlice: (state, action) => {
      const { id, status } = action.payload;
      state[id] = status;
    },
  },
});

export const { addBookStatusSlice } = bookStatusSlice.actions;
export const bookStatusReducer = bookStatusSlice.reducer;

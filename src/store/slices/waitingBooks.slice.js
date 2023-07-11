import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { waitingBooks } = INITIAL_STATE;

const waitingBooksSlice = createSlice({
  name: 'waitingBooks',
  initialState: waitingBooks,
  reducers: {
    addWaitingBooksSlice: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addWaitingBooksSlice } = waitingBooksSlice.actions;
export const waitingBooksReducer = waitingBooksSlice.reducer;

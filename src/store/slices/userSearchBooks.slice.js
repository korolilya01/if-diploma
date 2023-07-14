import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { userSearchBooksInitial } = INITIAL_STATE;

const userSearchBooksSlice = createSlice({
  name: 'userSearchBooks',
  initialState: userSearchBooksInitial,
  reducers: {
    userSearchBooks: (state, { payload }) => payload,
  },
});

export const { userSearchBooks } = userSearchBooksSlice.actions;
export const userSearchBooksReducer = userSearchBooksSlice.reducer;

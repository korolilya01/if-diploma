import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { allBooks } = INITIAL_STATE;

const allBooksSlice = createSlice({
  name: 'getAllBooks',
  initialState: allBooks,
  reducers: {
    getAllBooksSlice: (payload) => {
      return [...payload];
    },
  },
});

export const { getAllBooksSlice } = allBooksSlice.actions;
export const allBooksReducer = allBooksSlice.reducer;

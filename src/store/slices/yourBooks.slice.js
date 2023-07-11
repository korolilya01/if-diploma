import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { yourBooks } = INITIAL_STATE;

const yourBooksSlice = createSlice({
  name: 'getYourBooks',
  initialState: yourBooks,
  reducers: {
    addYourBooksSlice: (state, action) => {
      state.push(action.payload);
    },
    removeYourBooksSlice: (state, action) => {
      const bookId = action.payload;
      const index = state.findIndex((book) => book.id === bookId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addYourBooksSlice, removeYourBooksSlice } =
  yourBooksSlice.actions;
export const yourBooksReducer = yourBooksSlice.reducer;

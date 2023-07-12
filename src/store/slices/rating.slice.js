import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { rating } = INITIAL_STATE;

const bookRatingSlice = createSlice({
  name: 'bookRating',
  initialState: rating,
  reducers: {
    addBookRatingSlice: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBookRatingSlice } = bookRatingSlice.actions;
export const bookRatingReducer = bookRatingSlice.reducer;

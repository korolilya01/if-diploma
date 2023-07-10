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
  },
});

export const { addYourBooksSlice } = yourBooksSlice.actions;
export const yourBooksReducer = yourBooksSlice.reducer;

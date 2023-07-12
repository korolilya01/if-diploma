import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { accounts } = INITIAL_STATE;

const accountsSlice = createSlice({
  name: 'accountsList',
  initialState: accounts,
  reducers: {
    addAccountSlice: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addAccountSlice } = accountsSlice.actions;
export const accountsReducer = accountsSlice.reducer;

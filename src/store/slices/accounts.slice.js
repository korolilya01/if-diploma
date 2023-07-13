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
    //for changing account info
    updateAccountSlice: (state, action) => {
      const { index, updatedAccount } = action.payload;
      state[index] = updatedAccount;
    },
  },
});

export const { addAccountSlice, updateAccountSlice } = accountsSlice.actions;
export const accountsReducer = accountsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../constants/initialState';

const { accounts } = INITIAL_STATE;

const accountsSlice = createSlice({
  name: 'accountsList',
  initialState: accounts,
  reducers: {
    //add new user's account to array of accounts
    addAccountSlice: (state, action) => {
      state.push(action.payload);
    },
    //for changing account info
    updateAccountSlice: (state, action) => {
      const { index, updatedAccount } = action.payload;
      state[index] = updatedAccount;
    },
    //add the book to this array if current user is first
    addYourBooks: (state, action) => {
      const { name, payload } = action.payload;
      const account = state.find((item) => item.name === name);
      if (account) {
        account.yourBooks.push(payload);
      }
    },
    //add the book to this array if current user isn't first
    addWaitingBooks: (state, action) => {
      const { name, payload } = action.payload;
      const account = state.find((item) => item.name === name);
      if (account) {
        account.waitingBooks.push(payload);
      }
    },
    //remove the book from this array if current user was first
    removeYourBooksSlice: (state, action) => {
      const bookId = action.payload;
      state.forEach((account) => {
        const index = account.yourBooks.findIndex((book) => book.id === bookId);
        if (index !== -1) {
          account.yourBooks.splice(index, 1);
        }
      });
    },
    //remove the book from waiting books array
    removeWaitingBooksSlice: (state, action) => {
      const bookId = action.payload;
      state.forEach((account) => {
        const index = account.waitingBooks.findIndex(
          (book) => book.id === bookId,
        );
        if (index !== -1) {
          account.waitingBooks.splice(index, 1);
        }
      });
    },
  },
});

export const {
  addAccountSlice,
  updateAccountSlice,
  addYourBooks,
  addWaitingBooks,
  removeYourBooksSlice,
  removeWaitingBooksSlice,
} = accountsSlice.actions;
export const accountsReducer = accountsSlice.reducer;

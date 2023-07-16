import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { accountsReducer } from './accounts.slice';
import { apiSlice } from './api.slice';
import { authReducer } from './authorization.slice';
import { bookStatusReducer } from './bookStatus.slice';
import { userSearchBooksReducer } from './userSearchBooks.slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [apiSlice.reducerPath],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    accounts: accountsReducer,
    authorization: authReducer,
    bookStatus: bookStatusReducer,
    userSearchBooks: userSearchBooksReducer,
  }),
);

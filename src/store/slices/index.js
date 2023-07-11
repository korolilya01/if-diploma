import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { authReducer } from './authorization.slice';
import { yourBooksReducer } from './yourBooks.slice';
import { waitingBooksReducer } from './waitingBooks.slice';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    authorization: authReducer,
    yourBooks: yourBooksReducer,
    waitingBooks: waitingBooksReducer,
  }),
);

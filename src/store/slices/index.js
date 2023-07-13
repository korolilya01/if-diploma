import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { accountsReducer } from './accounts.slice';
import { authReducer } from './authorization.slice';
import { bookRatingReducer } from './rating.slice';
import { bookStatusReducer } from './bookStatus.slice';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    accounts: accountsReducer,
    authorization: authReducer,
    bookRating: bookRatingReducer,
    bookStatus: bookStatusReducer,
  }),
);

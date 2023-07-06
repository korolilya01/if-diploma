import React from 'react';

import { CommonPage } from '../CommonPage';
import { Sprites } from '../Sprites';
import { UserPage } from '../UserPage';
import { SingUp } from '../Authorization/SingUp';
import { Provider } from 'react-redux';

import { persistor, store } from '../../store';
import { PersistGate } from 'redux-persist/integration/react';

export function App() {
  return (
    <>
      <Sprites />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SingUp />
          <CommonPage />
          <UserPage />
        </PersistGate>
      </Provider>
    </>
  );
}

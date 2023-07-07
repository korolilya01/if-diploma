import React from 'react';

import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { Sprites } from '../Sprites';

import { persistor, store } from '../../store';

export function App() {
  return (
    <>
      <Sprites />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Outlet />
        </PersistGate>
      </Provider>
    </>
  );
}

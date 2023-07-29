import React from 'react';

import { Provider } from 'react-redux';

import { Outlet } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../../store';

import { Sprites } from '../Utils/Sprites';

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

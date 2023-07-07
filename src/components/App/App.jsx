import React from 'react';

import { CommonPage } from '../CommonPage';
import { Sprites } from '../Sprites';
// import { UserPage } from '../UserPage';
import { Provider } from 'react-redux';

import { persistor, store } from '../../store';
import { PersistGate } from 'redux-persist/integration/react';
import { CommonPageProvider } from '../CommonPage/CommonPage.context';

export function App() {
  return (
    <>
      <Sprites />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CommonPageProvider>
            <CommonPage />
          </CommonPageProvider>
          {/*<UserPage />*/}
        </PersistGate>
      </Provider>
    </>
  );
}

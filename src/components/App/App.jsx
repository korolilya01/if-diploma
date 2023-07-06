import React from 'react';

import { CommonPage } from '../CommonPage';
import { Sprites } from '../Sprites';
import { UserPage } from '../UserPage';

export function App() {
  return (
    <>
      <Sprites />
      <CommonPage />
      <UserPage />
    </>
  );
}

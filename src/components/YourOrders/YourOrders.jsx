import React from 'react';

import './YourOrders.scss';
import { BooksContainer } from '../BooksContainer';

export const YourOrders = () => {
  return (
    <>
      <BooksContainer
        array={null}
        title="Waiting for"
        message="Oops! You are not waiting for any book "
      />
      <BooksContainer
        array={null}
        title="List of your books"
        message="Oops! You haven't added any book yet"
      />
    </>
  );
};

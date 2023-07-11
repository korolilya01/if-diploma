import React from 'react';

import { useSelector } from 'react-redux';

import { getYourBooksSelector } from '../../store/selectors/yourBooks.selector';

import { BooksContainer } from '../BooksContainer';

import './YourOrders.scss';

export const YourOrders = () => {
  const yourBooksList = useSelector(getYourBooksSelector);

  return (
    <>
      <BooksContainer
        array={[]}
        title="Waiting for"
        message="Oops! You are not waiting for any book "
        buttonName="Check status"
      />
      <BooksContainer
        array={yourBooksList}
        title="List of your books"
        message="Oops! You haven't added any book yet"
        buttonName="Return"
      />
    </>
  );
};

import React from 'react';

import { useSelector } from 'react-redux';

import { authSelector } from '../../store/selectors/authorization.selector';
import { getAccountsSelector } from '../../store/selectors/accounts.selector';

import { BooksContainer } from '../BooksContainer';

import './YourOrders.scss';

export const YourOrders = () => {
  const accounts = useSelector(getAccountsSelector);
  const auth = useSelector(authSelector);

  const suchUser = accounts.find((item) => auth.email === item.email); //find an object for during user

  const yourBooksList = suchUser.yourBooks;
  const waitingBooksList = suchUser.waitingBooks;

  return (
    <>
      <BooksContainer
        array={waitingBooksList}
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

import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { getYourBooksSelector } from '../../store/selectors/yourBooks.selector';

import { BooksContainer } from '../BooksContainer';

import { getBooks } from '../../services';

import './YourOrders.scss';

export const YourOrders = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((response) => setBooks(response));
  }, []);

  const yourBooksList = useSelector(getYourBooksSelector);

  return (
    <>
      <BooksContainer
        array={books}
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

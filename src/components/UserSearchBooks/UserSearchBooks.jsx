import React from 'react';

import { useSelector } from 'react-redux';

import { userSearchBooksSelector } from '../../store/selectors/userSearchBooks.selector';

import { BooksContainer } from '../BooksContainer';

export const UserSearchBooks = () => {
  const books = useSelector(userSearchBooksSelector);

  return <BooksContainer array={books} title="Searching result" />;
};

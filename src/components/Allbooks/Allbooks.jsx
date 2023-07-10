import React, { useEffect, useState } from 'react';

import { BooksContainer } from '../BooksContainer';
import { Button } from '../Button';

import { getBooks } from '../../services';

import './Allbooks.scss';
import classNames from 'classnames';

export const Allbooks = () => {
  const [books, setBooks] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    getBooks().then((response) => setBooks(response));
  }, []);

  const showMoreBooks = () => {
    setShowMore(true);
  };
  const showLessBooks = () => {
    setShowMore(false);
  };

  return (
    <BooksContainer array={books} title="All books">
      <Button
        onClick={!showMore ? showMoreBooks : showLessBooks}
        className={classNames(
          'allBooks__button',
          !showMore ? 'allBooks__button-more' : 'allBooks__button-less',
        )}
        content={!showMore ? 'Show more' : 'Show less'}
      />
    </BooksContainer>
  );
};

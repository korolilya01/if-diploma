import React, { useCallback, useEffect, useState } from 'react';

import { BooksContainer } from '../BooksContainer';
import { Button } from '../Button';

import { getBooks } from '../../services';

import './Allbooks.scss';

export const Allbooks = () => {
  const [books, setBooks] = useState([]);

  const calculateBookPerRow = useCallback(() => {
    if (window.innerWidth > 1332) {
      return 4;
    } else if (window.innerWidth <= 1331 && window.innerWidth > 1064) {
      return 3;
    } else if (window.innerWidth <= 1064 && window.innerWidth > 787) {
      return 2;
    } else {
      return 1;
    }
  }, []);

  const [bookPerRow, setBookPerRow] = useState(calculateBookPerRow());

  useEffect(() => {
    getBooks()
      .then((response) => setBooks(response))
      .catch((error) => console.log(error)); //getting books from server

    const handleResize = () => {
      setBookPerRow(calculateBookPerRow());
    };

    window.addEventListener('resize', handleResize);
  }, [calculateBookPerRow]);

  const showMoreBooks = () => {
    setBookPerRow((prevState) => prevState + bookPerRow);
  };

  const newBooks = books.slice(0, bookPerRow);

  return (
    <BooksContainer message="Loading ..." array={newBooks} title="All books">
      {newBooks.length !== books.length && (
        <Button
          onClick={showMoreBooks}
          className="allBooks__button"
          content="Show more"
        />
      )}
    </BooksContainer>
  );
};

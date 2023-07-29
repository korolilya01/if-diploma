import React, { useCallback, useEffect, useState } from 'react';

import { BooksContainer } from '../../BooksContainer';
import { Button } from '../../Utils/Button';

import { getBooks } from '../../../services';

import './AllBooks.scss';

export const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [bookPerRow, setBookPerRow] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getBooksForAllBooksSection = () => {
    getBooks()
      .then((response) => setBooks(response))
      .catch((error) => console.log(error)); //getting books from server
  };

  const calculateBookPerRow = useCallback(() => {
    if (windowWidth > 1332) {
      return 4;
    } else if (windowWidth <= 1331 && windowWidth > 1064) {
      return 3;
    } else if (windowWidth <= 1064 && windowWidth > 787) {
      return 2;
    } else {
      return 1;
    }
  }, []);

  useEffect(() => {
    getBooksForAllBooksSection();
  }, []);

  useEffect(() => {
    // Calculate the number of books to display per row based on window width
    setBookPerRow(calculateBookPerRow());
  }, [calculateBookPerRow]);

  useEffect(() => {
    // Add event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showMoreBooks = () => {
    setBookPerRow((prevState) => prevState + bookPerRow);
  };

  const newBooks = books.slice(0, bookPerRow);

  return (
    <BooksContainer message="Loading..." array={newBooks} title="All books">
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

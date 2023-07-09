import React, { useEffect, useState } from 'react';

import { Button } from '../Button';
import { Card } from './Card';

import { getBooks } from '../../services';

import './Allbooks.scss';

export const Allbooks = () => {
  const [books, setBooks] = useState([]);

  const [booksPerSlide, setBooksPerSlide] = useState(4);

  useEffect(() => {
    getBooks().then((response) => setBooks(response));
  }, []);

  const showMoreBooks = () => {
    setBooksPerSlide((prevState) => prevState + 4);
  };

  return (
    <section className="allBooks">
      <h2 className="allBooks__title">All books</h2>
      <div className="allBooks__container">
        {books.slice(0, booksPerSlide).map((item) => {
          return (
            <div key={item.id}>
              <Card {...item} />
            </div>
          );
        })}
      </div>
      <Button
        onClick={showMoreBooks}
        className="allBooks__button"
        content="Show more"
      />
    </section>
  );
};

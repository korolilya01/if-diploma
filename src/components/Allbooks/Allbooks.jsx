import React, { useEffect, useState } from 'react';

import { Button } from '../Button';

import { getBooks } from '../../services';

import './Allbooks.scss';

export const Allbooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((response) => setBooks(response));
  }, []);

  return (
    <section className="allBooks">
      <div className="allBooks__title">All books</div>
      <div className="allBooks__container">
        {books.map((item) => {
          const { imageUrl } = item;
          const [bookName] = item.name.split(':'); //cut the book's name to ':'

          return (
            <div key={item.id} className="allBooks__book">
              <img className="allBooks__img" src={imageUrl} alt={item.name} />
              <div className="allBooks__desc">
                <div className="allBooks__desc-status">Available</div>
                <p className="allBooks__desc-title">{bookName}</p>
                <p className="allBooks__desc-author">by {item.author}</p>
                <div className="allBooks__desc-rating"></div>
                <Button className="allBooks__desc-order" content="Order" />
              </div>
            </div>
          );
        })}
      </div>
      <Button className="allBooks__button" content="Show more" />
    </section>
  );
};

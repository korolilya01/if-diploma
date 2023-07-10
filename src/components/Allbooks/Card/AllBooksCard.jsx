import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../../Button';

import './AllBookCards.scss';
export const AllBooksCard = ({ ...item }) => {
  const {
    id,
    imageUrl,
    author,
    name,
    length,
    released,
    description,
    addChooseBook,
    isAvailable,
  } = item;
  const [bookName] = name.split(':'); //cut the book's name to ':'

  return (
    <div className="allBooksCard__books">
      <Link
        to={`/bookPage/:${id}`}
        state={{
          imageUrl,
          author,
          name,
          length,
          released,
          description,
          bookName,
        }}
      >
        <img className="allBooksCard__img" src={imageUrl} alt={name} />
      </Link>
      <div className="allBooksCard__desc">
        <div className="allBooksCard__desc-status">
          {isAvailable ? 'Available' : 'Taken'}
        </div>
        <p className="allBooksCard__desc-title">{bookName}</p>
        <p className="allBooksCard__desc-author">by {author}</p>
        <div className="allBooksCard__desc-rating"></div>
        <Button
          onClick={addChooseBook}
          className="allBooksCard__desc-order"
          content="Order"
        />
      </div>
    </div>
  );
};

import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../../Button';

import './YourBooksCard.scss';

export const YourBooksCard = ({ ...item }) => {
  const navigate = useNavigate();

  const {
    id,
    imageUrl,
    author,
    name,
    buttonName,
    length,
    released,
    description,
    removeChosenBook,
  } = item;
  const [bookName] = name.split(':'); //cut the book's name to ':'

  return (
    <div className="yourBooksCard">
      <Link
        to={`/bookPage/:${id}`}
        state={{
          imageUrl,
          author,
          name,
          bookName,
          length,
          released,
          description,
        }}
      >
        <img className="yourBooksCard__img" src={imageUrl} alt={name} />
      </Link>
      <p className="yourBooksCard__title">{bookName}</p>
      <p className="yourBooksCard__author">by {author}</p>
      <div className="yourBooksCard__rating"></div>
      {buttonName === 'Check status' ? (
        <Button
          onClick={() => navigate(`/bookStatus/:${[id]}`)}
          className="yourBooksCard__button"
          content={buttonName}
        />
      ) : (
        <Button
          onClick={removeChosenBook}
          className="yourBooksCard__button"
          content={buttonName}
        />
      )}
    </div>
  );
};

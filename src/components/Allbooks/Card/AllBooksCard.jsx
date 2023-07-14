import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { getBookStatusSelector } from '../../../store/selectors/bookStatus.selector';

import { Button } from '../../Button';

import './AllBookCards.scss';
import classNames from 'classnames';

export const AllBooksCard = ({ ...item }) => {
  const {
    id,
    imageUrl,
    author,
    name,
    length,
    released,
    description,
    addChosenBook,
  } = item;
  const [bookName] = name.split(':'); //cut the book's name to ':'
  const bookStatus = useSelector(getBookStatusSelector);

  return (
    <div className="allBooksCard__books">
      <Link
        to={`/bookPage/:${id}`}
        state={{
          id,
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
        {bookStatus[id] /*checking if the book is taken*/ ? (
          <div className="allBooksCard__desc-statusTaken">Taken</div>
        ) : (
          <div className="allBooksCard__desc-statusAvailable">Available</div>
        )}
        <p className="allBooksCard__desc-title">{bookName}</p>
        <p className="allBooksCard__desc-author">by {author}</p>
        <div className="allBooksCard__desc-rating"></div>
        <Button
          onClick={addChosenBook}
          className={classNames(
            'allBooksCard__desc-order',
            bookStatus[id] ? 'taken' : 'available',
          )}
          content="Order"
        />
      </div>
    </div>
  );
};

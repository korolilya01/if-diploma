import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { authSelector } from '../../../store/selectors/authorization.selector';
import { getAccountsSelector } from '../../../store/selectors/accounts.selector';
import { getBookStatusSelector } from '../../../store/selectors/bookStatus.selector';

import { Button } from '../../Button';
import { Notification } from '../../Notification';
import { Rating } from '../../Rating';

import { checkBookInList } from '../../../services/bookOwner';

import './AllBookCards.scss';
import classNames from 'classnames';

export const AllBooksCard = ({ ...item }) => {
  const [showNotification, setShowNotification] = useState(false);
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

  const accounts = useSelector(getAccountsSelector); // accounts array
  const auth = useSelector(authSelector); //current user's data
  const bookStatus = useSelector(getBookStatusSelector); //book status

  const [isBookInYourList, isBookInWaitingList, bookOwner] = checkBookInList(
    accounts,
    id,
  );

  const onClick = () => {
    addChosenBook();
    if (isBookInYourList || isBookInWaitingList) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  };

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
        }}
      >
        <img className="allBooksCard__img" src={imageUrl} alt={name} />
      </Link>
      {showNotification && <Notification message="The book in your list" />}
      <div className="allBooksCard__desc">
        {bookStatus[id] /*checking if the book is taken*/ ? (
          <div className="allBooksCard__desc-statusTaken">Taken</div>
        ) : (
          <div className="allBooksCard__desc-statusAvailable">Available</div>
        )}
        {bookStatus[id] && (
          <p className="allBooksCard__desc-taken">
            Bookholder: {bookOwner.name === auth.name ? 'You' : bookOwner.name}
          </p>
        )}
        <p className="allBooksCard__desc-title">{bookName}</p>
        <p className="allBooksCard__desc-author">by {author}</p>
        <Rating className="allBooksCard__desc-rating" id={id} />
        <Button
          onClick={onClick}
          className={classNames(
            'allBooksCard__desc-order',
            bookStatus[id] ? 'button-taken' : 'button-available',
          )}
          content="Order"
        />
      </div>
    </div>
  );
};

import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { authSelector } from '../../store/selectors/authorization.selector';
import { getBookStatusSelector } from '../../store/selectors/bookStatus.selector';
import { getAccountsSelector } from '../../store/selectors/accounts.selector';

import { Button } from '../Button';
import { Notification } from '../Notification';
import { Rating } from '../Rating';

import { addBook } from '../../services/bookUtils';
import { checkBookInList } from '../../services/bookOwner';

import './BookPage.scss';
import classNames from 'classnames';

export const BookPage = () => {
  const dispatch = useDispatch();

  const [isShowMore, setIsShowMore] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const location = useLocation();
  const { state } = location;
  const { id, imageUrl, author, name, length, released, description } = state; //state destructuring
  const pureDesc = description.replace(/<\/?p>/g, '').replace(/<br\/?>/g, ''); //deleted <p></p> and <br> from description

  const onClickShowMore = () => {
    setIsShowMore(false);
  };

  const accounts = useSelector(getAccountsSelector); // accounts array
  const auth = useSelector(authSelector); //current user's data
  const bookStatus = useSelector(getBookStatusSelector); //book status

  const [isBookInYourList, isBookInWaitingList] = checkBookInList(accounts, id);

  const addBookToListOfYourBooks = (book) => {
    addBook(dispatch, accounts, auth, bookStatus, book);
  };

  const onClick = () => {
    addBookToListOfYourBooks(state);
    if (isBookInYourList || isBookInWaitingList) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  };

  return (
    <section className="bookPage">
      <img className="bookPage__img" src={imageUrl} alt={name} />
      <div className="bookPage__wrap">
        <Rating className="bookPage__wrap-rating" id={id} />
        <h2 className="bookPage__wrap-title">{name}</h2>
        <p className="bookPage__wrap-author">{author}</p>
        <p className="bookPage__wrap-dopInfo">
          {length}, released in {released}
        </p>
        <Button
          onClick={onClick}
          className={classNames(
            'bookPage__wrap-order',
            bookStatus[id] ? 'button-taken' : 'button-available',
          )}
          content="Order"
        />
        {showNotification && <Notification message="The book in your list" />}
        <h3 className="bookPage__wrap-titleDesc">About book</h3>
        <p className="bookPage__wrap-desc">
          {/*cut paragraph if length more than 300*/}
          {isShowMore ? pureDesc.substring(0, 300) + '...' : pureDesc}{' '}
        </p>
        {isShowMore && (
          <Button
            onClick={onClickShowMore}
            className="bookPage__wrap-showMore"
            content="Show more"
          />
        )}
      </div>
    </section>
  );
};

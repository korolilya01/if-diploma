import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { authSelector } from '../../store/selectors/authorization.selector';
import { getBookStatusSelector } from '../../store/selectors/bookStatus.selector';
import { getAccountsSelector } from '../../store/selectors/accounts.selector';

import { Button } from '../Button';

import { addBook } from '../../services/bookUtils';

import './BookPage.scss';
import classNames from 'classnames';

export const BookPage = () => {
  const [isShowMore, setIsShowMore] = useState(true);

  const location = useLocation();
  const { state } = location;
  const { id, imageUrl, author, name, length, released, description } = state; //state destructuring
  const pureDesc = description.replace(/<\/?p>/g, '').replace(/<br\/?>/g, ''); //deleted <p></p> and <br> from description

  const onClickShowMore = () => {
    setIsShowMore(false);
  };

  const dispatch = useDispatch();
  const yourBooksList = useSelector(getAccountsSelector);
  const auth = useSelector(authSelector);
  const bookStatus = useSelector(getBookStatusSelector);

  const addBookToListOfYourBooks = (book) => {
    addBook(dispatch, yourBooksList, auth, bookStatus, book);
  };

  return (
    <section className="bookPage">
      <img className="bookPage__img" src={imageUrl} alt={name} />
      <div className="bookPage__wrap">
        <div className="bookPage__wrap-rating"></div>
        <h2 className="bookPage__wrap-title">{name}</h2>
        <p className="bookPage__wrap-author">{author}</p>
        <p className="bookPage__wrap-dopInfo">
          {length}, released in {released}
        </p>
        <Button
          onClick={() => addBookToListOfYourBooks(state)}
          className={classNames(
            'bookPage__wrap-order',
            bookStatus[id] ? 'taken' : 'available',
          )}
          content="Order"
        />
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

import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {
  addWaitingBooks,
  addYourBooks,
} from '../../store/slices/accounts.slice';
import { addBookStatusSlice } from '../../store/slices/bookStatus.slice';

import { authSelector } from '../../store/selectors/authorization.selector';
import { getBookStatusSelector } from '../../store/selectors/bookStatus.selector';
import { getAccountsSelector } from '../../store/selectors/accounts.selector';

import { Button } from '../Button';

import './BookPage.scss';
import classNames from 'classnames';

export const BookPage = () => {
  const [isShowMore, setIsShowMore] = useState(true);

  const dispatch = useDispatch();

  const yourBooksList = useSelector(getAccountsSelector);
  const auth = useSelector(authSelector);
  const bookStatus = useSelector(getBookStatusSelector);

  const location = useLocation();
  const { state } = location;
  const {
    id,
    imageUrl,
    author,
    name,
    length,
    released,
    description,
    bookName,
  } = //state destructuring
    state;
  const pureDesc = description.replace(/<\/?p>/g, ``).replace(/<br\/?>/g, ''); //deleted <p></p> and <br> from description

  const onClickShowMore = () => {
    setIsShowMore(false);
  };

  const addBook = () => {
    const user = yourBooksList.find((item) => auth.email === item.email); //find an object with data for during user

    const booksList = user.yourBooks; // checking yourBooksList
    const idNew = state.id;

    //check book status
    if (bookStatus[idNew]) {
      //check if the book in the list
      if (!booksList.includes(state)) {
        dispatch(addWaitingBooks({ name: auth.name, payload: state })); //add a book to 'Waiting for' list
      }
      return; //if the book is already in the list, do nothing
    }

    dispatch(addYourBooks({ name: auth.name, payload: state })); //add a book to 'List of your books' list
    dispatch(addBookStatusSlice({ id: state.id, status: true })); //add a status 'taken' to the book if during user is first
  };

  return (
    <section className="bookPage">
      <img className="bookPage__img" src={imageUrl} alt={name} />
      <div className="bookPage__wrap">
        <div className="bookPage__wrap-rating"></div>
        <h2 className="bookPage__wrap-title">{bookName}</h2>
        <p className="bookPage__wrap-author">{author}</p>
        <p className="bookPage__wrap-dopInfo">
          {length}, released in {released}
        </p>
        <Button
          onClick={addBook}
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

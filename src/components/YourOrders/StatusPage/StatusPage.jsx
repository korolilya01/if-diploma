import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authSelector } from '../../../store/selectors/authorization.selector';
import { getAccountsSelector } from '../../../store/selectors/accounts.selector';
import { getBookStatusSelector } from '../../../store/selectors/bookStatus.selector';

import { Button } from '../../Button';

import './StatusPage.scss';
import classNames from 'classnames';
import { removeWaitingBooksSlice } from '../../../store/slices/accounts.slice';
import { addBook } from '../../../services/bookUtils';

export const StatusPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const newId = id.slice(1, id.length); //remove ":" from id-path

  const yourBooksList = useSelector(getAccountsSelector);
  const auth = useSelector(authSelector);
  const status = useSelector(getBookStatusSelector);

  const user = yourBooksList.find((item) => auth.email === item.email); //find current user
  const booksWaitingList = user.waitingBooks;

  const currentBook = booksWaitingList.find((book) => book.id === newId); //find current book

  const { imageUrl, name, author, released, length } = currentBook;

  const removeBookFromWaitingList = () => {
    dispatch(removeWaitingBooksSlice(newId));
    navigate('/orders');
  };
  const addBookToListOfYourBooks = (book) => {
    addBook(dispatch, yourBooksList, auth, status, book);
    removeBookFromWaitingList();
  };

  return (
    <div className="statusPage">
      <img className="statusPage__img" src={imageUrl} alt={name} />
      <div className="statusPage__container">
        <div className="statusPage__container-rating"></div>
        <h2 className="statusPage__container-title">{name}</h2>
        <h3
          className={classNames(
            'statusPage__container-status',
            status[newId] ? 'taken' : 'available',
          )}
        >
          {status[newId] ? 'Taken' : 'Available'}
        </h3>
        <p className="statusPage__container-author">{author}</p>
        <p className="statusPage__container-dopInfo">
          {length}, released in {released}
        </p>
        <div className="statusPage__container-buttons">
          <Button
            onClick={() => addBookToListOfYourBooks(currentBook)}
            disabled={status[newId]}
            className={classNames(
              status[newId] && 'disabled',
              'statusPage__button',
            )}
            content="Order"
          />
          <Button
            onClick={removeBookFromWaitingList}
            className="statusPage__button"
            content="Return"
          />
        </div>
      </div>
    </div>
  );
};

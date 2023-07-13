import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addBookStatusSlice } from '../../store/slices/bookStatus.slice';
import {
  addWaitingBooks,
  addYourBooks,
  removeYourBooksSlice,
} from '../../store/slices/accounts.slice';

import { authSelector } from '../../store/selectors/authorization.selector';
import { getAccountsSelector } from '../../store/selectors/accounts.selector';
import { getBookStatusSelector } from '../../store/selectors/bookStatus.selector';

import { AllBooksCard } from '../Allbooks/Card';
import { YourBooksCard } from '../YourOrders/Card';

import './BooksContainer.scss';

export const BooksContainer = ({
  title,
  array,
  className,
  children,
  message,
  buttonName,
}) => {
  const dispatch = useDispatch();

  const yourBooksList = useSelector(getAccountsSelector);
  const auth = useSelector(authSelector);
  const status = useSelector(getBookStatusSelector);

  const removeBook = (item) => {
    dispatch(removeYourBooksSlice(item.id)); //remove a book from during user's list
    dispatch(addBookStatusSlice({ id: item.id, status: false })); //add a status 'available' to the book
  };

  const addBook = (book) => {
    const user = yourBooksList.find((item) => auth.email === item.email); //find an object with data for during user

    const booksList = user.yourBooks; // checking yourBooksList
    const idNew = book.id;

    //check book status
    if (status[idNew]) {
      //check if the book in the list
      if (!booksList.includes(book)) {
        dispatch(addWaitingBooks({ name: auth.name, payload: book })); //add a book to 'Waiting for' list
      }
      return;
    }

    dispatch(addYourBooks({ name: auth.name, payload: book })); //add a book to 'List of your books' list
    dispatch(addBookStatusSlice({ id: book.id, status: true })); //add a status 'taken' to the book if during user is first
  };

  return (
    <section className="booksContainer">
      <h2 className="booksContainer__title">{title}</h2>
      <div className="booksContainer__container">
        {array.length !== 0 ? (
          array.map((item) => {
            return (
              <div key={item.id} className={className}>
                {title === 'All books' ? (
                  <AllBooksCard {...item} addChosenBook={() => addBook(item)} />
                ) : (
                  <YourBooksCard
                    {...item}
                    buttonName={buttonName}
                    removeChosenBook={() => removeBook(item)}
                  />
                )}
              </div>
            );
          })
        ) : (
          <p className="booksContainer__message">{message}</p>
        )}
      </div>
      {children}
    </section>
  );
};

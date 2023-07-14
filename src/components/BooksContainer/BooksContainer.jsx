import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addBookStatusSlice } from '../../store/slices/bookStatus.slice';
import { removeYourBooksSlice } from '../../store/slices/accounts.slice';

import { authSelector } from '../../store/selectors/authorization.selector';
import { getAccountsSelector } from '../../store/selectors/accounts.selector';
import { getBookStatusSelector } from '../../store/selectors/bookStatus.selector';

import { AllBooksCard } from '../Allbooks/Card';
import { YourBooksCard } from '../YourOrders/Card';

import { addBook } from '../../services/bookUtils';

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

  const addBookToListOfYourBooks = (book) => {
    addBook(dispatch, yourBooksList, auth, status, book);
  };

  return (
    <section className="booksContainer">
      <h2 className="booksContainer__title">{title}</h2>
      <div className="booksContainer__container">
        {array.length !== 0 ? (
          array.map((item) => {
            return (
              <div key={item.id} className={className}>
                {title === 'All books' || title === 'Searching result' ? (
                  <AllBooksCard
                    {...item}
                    addChosenBook={() => addBookToListOfYourBooks(item)}
                  />
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

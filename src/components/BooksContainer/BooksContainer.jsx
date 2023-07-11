import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  addYourBooksSlice,
  removeYourBooksSlice,
} from '../../store/slices/yourBooks.slice';
import { addWaitingBooksSlice } from '../../store/slices/waitingBooks.slice';
import { getYourBooksSelector } from '../../store/selectors/yourBooks.selector';

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
  const yourBooksList = useSelector(getYourBooksSelector);

  const removeBook = (item) => {
    dispatch(removeYourBooksSlice(item.id));
  };

  const addBook = (book) => {
    for (let i = 0; i < yourBooksList.length; i++) {
      if (yourBooksList[i].id === book.id) {
        dispatch(addWaitingBooksSlice(book));
        removeBook(book);
        return;
      }
    }
    dispatch(addYourBooksSlice(book));
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

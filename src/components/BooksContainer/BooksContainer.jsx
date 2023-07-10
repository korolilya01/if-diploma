import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addYourBooksSlice } from '../../store/slices/yourBooks.slice';
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
  const [isAvailable, setIsAvailable] = useState(true);

  const dispatch = useDispatch();
  const yourBooksList = useSelector(getYourBooksSelector);
  console.log(yourBooksList);

  const addBook = (book) => {
    for (let i = 0; i < yourBooksList.length; i++) {
      if (yourBooksList[i].id === book.id) {
        return null;
      }
    }
    dispatch(addYourBooksSlice(book));
    setIsAvailable(false);
  };

  return (
    <section className="booksContainer">
      <h2 className="booksContainer__title">{title}</h2>
      <div className="booksContainer__container">
        {array ? (
          array.map((item) => {
            return (
              <div key={item.id} className={className}>
                {title === 'All books' ? (
                  <AllBooksCard
                    {...item}
                    addChooseBook={() => addBook(item)}
                    isAvailable={isAvailable}
                  />
                ) : (
                  <YourBooksCard {...item} buttonName={buttonName} />
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

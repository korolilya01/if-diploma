import React from 'react';

import './BooksContainer.scss';
import { AllBooksCard } from '../Allbooks/Card';

export const BooksContainer = ({
  title,
  array,
  className,
  children,
  message,
}) => {
  return (
    <section className="booksContainer">
      <h2 className="booksContainer__title">{title}</h2>
      <div className="booksContainer__container">
        {array ? (
          array.map((item) => {
            return (
              <div key={item.id} className={className}>
                {title === 'All books' ? <AllBooksCard {...item} /> : null}
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

import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../../Button';

export const Card = ({ ...item }) => {
  const { id, imageUrl, author, name, length, released, description } = item;
  const [bookName] = name.split(':'); //cut the book's name to ':'

  return (
    <Link
      to={`/bookPage/:${id}`}
      state={{
        imageUrl,
        author,
        name,
        length,
        released,
        description,
        bookName,
      }}
    >
      <div className="allBooks__books">
        <img className="allBooks__img" src={imageUrl} alt={name} />
        <div className="allBooks__desc">
          <div className="allBooks__desc-status">Available</div>
          <p className="allBooks__desc-title">{bookName}</p>
          <p className="allBooks__desc-author">by {author}</p>
          <div className="allBooks__desc-rating"></div>
          <Button className="allBooks__desc-order" content="Order" />
        </div>
      </div>
    </Link>
  );
};

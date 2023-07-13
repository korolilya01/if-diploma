import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { Button } from '../Button';

import './BookPage.scss';

export const BookPage = () => {
  const [isShowMore, setIsShowMore] = useState(true);

  const location = useLocation();
  const { state } = location;
  const {
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
        <Button className="bookPage__wrap-order" content="Order" />
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

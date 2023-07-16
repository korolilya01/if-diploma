import React from 'react';

import { Icon } from '../Icon';

import './Rating.scss';

export const Rating = ({ id, className }) => {
  const rating = id.split('').find((num) => num > 0 && num <= 5);
  const arrayOfStars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      arrayOfStars.push('fill');
    } else {
      arrayOfStars.push('empty');
    }
  }

  return (
    <div className="starsContainer">
      {arrayOfStars.map((item, index) => (
        <Icon
          key={index}
          className={className}
          iconHref={item === 'fill' ? '#fillStar' : '#emptyStar'}
        />
      ))}
    </div>
  );
};

import React from 'react';

export const Icon = ({ className, iconHref, onClick }) => (
  <svg className={className} onClick={onClick}>
    <use href={iconHref} />
  </svg>
);

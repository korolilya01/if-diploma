import React from 'react';

import { NavLink } from 'react-router-dom';

import { headerMenu } from '../config';

import './Dropdown.scss';

export const Dropdown = ({ isVisible }) => {
  return (
    isVisible && (
      <div className="dropdown">
        <div className="dropdown__container">
          {' '}
          {headerMenu.map((item) => {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="dropdown__link"
              >
                {item.content}
              </NavLink>
            );
          })}
        </div>
      </div>
    )
  );
};

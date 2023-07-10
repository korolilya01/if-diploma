import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { DropdownUser } from './Dropdown';
import { Header } from '../../Header';
import { Icon } from '../../Icon';

import { headerMenu } from './config';

import './UserHeader.scss';
import classNames from 'classnames';

export const UserHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showDropdownUser = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Header>
      <div className="userHeader__nav-container">
        {headerMenu.map((item) => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                classNames(
                  'userHeader__nav-link',
                  'userHeader__nav-link-hidden',
                  {
                    'userHeader__nav-link-active': isActive,
                  },
                )
              }
            >
              {item.content}
            </NavLink>
          );
        })}
      </div>
      <div className="userHeader__nav-container">
        <DropdownUser isVisible={isVisible} />
        <span
          onClick={showDropdownUser}
          className="userHeader__nav-account"
        ></span>
        <Icon
          iconHref={isVisible ? '#arrowUp' : '#arrowDown'}
          className="userHeader__nav-accountArrow"
        />
      </div>
    </Header>
  );
};

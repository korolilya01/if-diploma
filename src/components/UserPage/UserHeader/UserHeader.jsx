import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { DropdownUser } from './Dropdown';
import { Header } from '../../Header';
import { Icon } from '../../Icon';

import './UserHeader.scss';
import classNames from 'classnames';

export const UserHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showDropdownUser = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Header>
      <div className="header__nav-container">
        <Link
          to="/allbooks"
          className={classNames('header__nav-link', 'header__nav-link-hidden')}
        >
          All books
        </Link>
        <Link
          to="/orders"
          className={classNames('header__nav-link', 'header__nav-link-hidden')}
        >
          Your orders
        </Link>
      </div>
      <div className="header__nav-container">
        <DropdownUser isVisible={isVisible} />
        <span onClick={showDropdownUser} className="header__nav-account"></span>
        <Icon
          iconHref={isVisible ? '#arrowUp' : '#arrowDown'}
          className="header__nav-accountArrow"
        />
      </div>
    </Header>
  );
};

import React from 'react';

import { Header } from '../../Header';
import { Icon } from '../../Icon';

import './UserHeader.scss';

export const UserHeader = () => {
  return (
    <Header>
      <div className="header__nav-container">
        <span className="header__nav-link">All books</span>
        <span className="header__nav-link">Your orders</span>
      </div>
      <div className="header__nav-container">
        <span className="header__nav-account"></span>

        <Icon iconHref="#account" className="header__nav-accountArrow" />
      </div>
    </Header>
  );
};

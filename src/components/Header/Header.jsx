import React from 'react';

import { Icon } from '../Icon';
import { Input } from '../Input';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Icon className="header__logo" iconHref="#logo" />
      <Input
        id="search"
        labelId="search"
        inputClassName="header__search"
        type="text"
        name="searchBook"
        placeholder="Search by author, title, name"
      />
      <nav className="header__nav">
        <span className="header__nav-link">Log in</span>
        <span className="header__nav-link">Sign up</span>
      </nav>
    </header>
  );
};

import React from 'react';

import { Icon } from '../Icon';
import { Input } from '../Input';

import './Header.scss';

export const Header = ({ children }) => {
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
      <nav className="header__nav">{children}</nav>
    </header>
  );
};

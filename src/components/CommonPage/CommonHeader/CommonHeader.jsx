import React from 'react';

import { Header } from '../../Header';
import { Icon } from '../../Icon';

export const CommonHeader = () => {
  return (
    <Header>
      <span className="header__nav-link">Log in</span>
      <span className="header__nav-link">Sign up</span>
      <Icon className="header__nav-burger" iconHref="#menu" />
    </Header>
  );
};

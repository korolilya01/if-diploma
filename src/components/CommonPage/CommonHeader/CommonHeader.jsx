import React, { useState } from 'react';

import { Header } from '../../Header';
import { HeaderLinks } from './HeaderLinks';
import { Icon } from '../../Icon';

import { Dropdown } from './Dropdown';

export const CommonHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Header>
      <HeaderLinks className="header__nav-link-hidden" />
      <Dropdown isVisible={isVisible} />
      <Icon
        onClick={showDropdown}
        className="header__nav-burger"
        iconHref="#menu"
      />
    </Header>
  );
};

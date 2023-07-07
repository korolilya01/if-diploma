import React, { useState } from 'react';

import { Dropdown } from './Dropdown';
import { Header } from '../../Header';
import { HeaderLinks } from './HeaderLinks';
import { Icon } from '../../Icon';

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

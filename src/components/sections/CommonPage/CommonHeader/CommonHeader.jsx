import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Dropdown } from './Dropdown';
import { Header } from '../../../Header';
import { Icon } from '../../../Utils/Icon';

import { headerMenu } from './config';

import './CommonHeader.scss';
import classNames from 'classnames';

export const CommonHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Header>
      {headerMenu.map((item) => {
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={classNames(
              'commonHeader__nav-link',
              'commonHeader__nav-link-hidden',
            )}
          >
            {item.content}
          </NavLink>
        );
      })}
      <Dropdown isVisible={isVisible} />
      <Icon
        onClick={showDropdown}
        className="commonHeader__nav-burger"
        iconHref="#menu"
      />
    </Header>
  );
};

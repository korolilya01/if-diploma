import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelector } from '../../../../store/selectors/authorization.selector';

import { Button } from '../../../Button';

import './DropdownUser.scss';
import classNames from 'classnames';

export const DropdownUser = ({ isVisible }) => {
  const state = useSelector(authSelector);

  return (
    isVisible && (
      <div className="dropdownUser">
        <div className="dropdownUser__container">
          <p className="dropdownUser__user">{state.name}</p>
          <Link to="/settings" className="dropdownUser__link ">
            Settings
          </Link>
          <Link to="/orders" className="dropdownUser__link ">
            My orders
          </Link>
          <Link
            to="/allbooks"
            className={classNames(
              'dropdownUser__link ',
              'dropdownUser__link-hidden',
            )}
          >
            All books
          </Link>
          <Button
            className="dropdownUser__button"
            content="Log out"
            buttonName="logout"
          />
        </div>
      </div>
    )
  );
};

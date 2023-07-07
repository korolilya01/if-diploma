import React from 'react';

import { Link } from 'react-router-dom';

import classNames from 'classnames';

export const HeaderLinks = ({ className }) => {
  return (
    <>
      <Link to="/login" className={classNames('header__nav-link', className)}>
        Log in
      </Link>
      <Link to="/singup" className={classNames('header__nav-link', className)}>
        Sign up
      </Link>
    </>
  );
};

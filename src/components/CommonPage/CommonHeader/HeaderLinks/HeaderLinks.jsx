import React from 'react';
import { useCommonPageContext } from '../../CommonPage.context';
import classNames from 'classnames';

export const HeaderLinks = ({ className }) => {
  const { setIsRegistrationOpen, setIsLogInOpen } = useCommonPageContext();

  const openLogIn = () => {
    setIsLogInOpen(true);
  };

  const openSingUp = () => {
    setIsRegistrationOpen(true);
  };

  return (
    <>
      <span
        onClick={openLogIn}
        className={classNames('header__nav-link', className)}
      >
        Log in
      </span>
      <span
        onClick={openSingUp}
        className={classNames('header__nav-link', className)}
      >
        Sign up
      </span>
    </>
  );
};

import React from 'react';

import { AuthForm } from '../AuthForm';

import { useCommonPageContext } from '../../CommonPage/CommonPage.context';
import { config } from './config';

export const LogIn = () => {
  const { setIsLogInOpen } = useCommonPageContext();
  const state = [
    {
      name: '',
      password: '',
    },
  ];
  const closeLogIn = () => {
    setIsLogInOpen(false);
  };

  return (
    <AuthForm
      array={config}
      state={state}
      title="Log In to Fox Library"
      buttonTitle="Log In"
      closeField={closeLogIn}
    />
  );
};

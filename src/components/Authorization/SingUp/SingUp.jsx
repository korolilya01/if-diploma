import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthForm } from '../AuthForm';

import { authSelector } from '../../../store/selectors/authorization.selector';
import { useCommonPageContext } from '../../CommonPage/CommonPage.context';
import { config } from './config';
import { registration } from '../../../store/slices/authorization.slice';

export const SingUp = () => {
  const dispatch = useDispatch();
  const state = useSelector(authSelector);

  const { setIsRegistrationOpen } = useCommonPageContext();

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch(registration({ [name]: value }));
  };

  const closeSingUp = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <AuthForm
      onChange={onChange}
      array={config}
      state={state}
      buttonTitle="Sing Up"
      title="Welcome to Fox Library"
      closeField={closeSingUp}
    />
  );
};

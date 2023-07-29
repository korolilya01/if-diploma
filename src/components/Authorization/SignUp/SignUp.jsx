import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addAccountSlice } from '../../../store/slices/accounts.slice';
import { registration } from '../../../store/slices/authorization.slice';

import { authSelector } from '../../../store/selectors/authorization.selector';

import { AuthForm } from '../AuthForm';

import { config } from './config';
import { routeLinks } from '../../../constants/routeLinks';

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector(authSelector);

  const changeFormInputValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch(registration({ [name]: value }));
  };

  const sendData = (e) => {
    e.preventDefault();
    dispatch(addAccountSlice(state));
    navigate(routeLinks.login);
  };

  return (
    <AuthForm
      onChange={changeFormInputValue}
      array={config}
      state={state}
      buttonTitle="Sign Up"
      title="Welcome to Fox Library"
      onSubmit={sendData}
    />
  );
};

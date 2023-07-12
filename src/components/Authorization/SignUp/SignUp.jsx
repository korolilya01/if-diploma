import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addAccountSlice } from '../../../store/slices/accounts.slice';
import { registration } from '../../../store/slices/authorization.slice';

import { authSelector } from '../../../store/selectors/authorization.selector';

import { AuthForm } from '../AuthForm';

import { config } from './config';

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector(authSelector);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch(registration({ [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addAccountSlice(state));
    navigate('/login');
  };

  return (
    <AuthForm
      onChange={onChange}
      array={config}
      state={state}
      buttonTitle="Sign Up"
      title="Welcome to Fox Library"
      onSubmit={onSubmit}
    />
  );
};

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../AuthForm';

import { authSelector } from '../../../store/selectors/authorization.selector';
import { registration } from '../../../store/slices/authorization.slice';

import { config } from './config';

export const SingUp = () => {
  const dispatch = useDispatch();
  const state = useSelector(authSelector);
  const navigate = useNavigate();

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch(registration({ [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <AuthForm
      onChange={onChange}
      array={config}
      state={state}
      buttonTitle="Sing Up"
      title="Welcome to Fox Library"
      onSubmit={onSubmit}
    />
  );
};

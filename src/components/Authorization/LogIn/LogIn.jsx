import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { registration } from '../../../store/slices/authorization.slice';

import { getAccountsSelector } from '../../../store/selectors/accounts.selector';

import { AuthForm } from '../AuthForm';

import { config, initialState } from './config';

export const LogIn = () => {
  const [formState, setFormState] = useState(initialState);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accounts = useSelector(getAccountsSelector);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < accounts.length; i++) {
      if (
        formState.name === accounts[i].name &&
        formState.password === accounts[i].password
      ) {
        dispatch(registration(accounts[i]));
        navigate('/allbooks');
        return;
      } else {
        setPasswordError(true);
        setTimeout(() => {
          setPasswordError(false);
        }, 500);
      }
    }
  };

  return (
    <AuthForm
      array={config}
      state={formState}
      title="Log In to Fox Library"
      buttonTitle="Log In"
      onSubmit={onSubmit}
      onChange={onChange}
      passwordError={passwordError}
    />
  );
};

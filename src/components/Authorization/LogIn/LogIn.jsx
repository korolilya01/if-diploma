import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../AuthForm';

import { authSelector } from '../../../store/selectors/authorization.selector';

import { config, initialState } from './config';

export const LogIn = () => {
  const [formState, setFormState] = useState(initialState);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const state = useSelector(authSelector);

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

    if (
      formState.name === state.name &&
      formState.password === state.password
    ) {
      navigate('/allbooks');
    } else {
      setPasswordError(true);
      setTimeout(() => {
        setPasswordError(false);
      }, 500);
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

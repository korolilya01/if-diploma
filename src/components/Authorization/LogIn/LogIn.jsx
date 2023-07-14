import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { registration } from '../../../store/slices/authorization.slice';

import { getAccountsSelector } from '../../../store/selectors/accounts.selector';

import { AuthForm } from '../AuthForm';

import { config, initialState } from './config';

export const LogIn = () => {
  const [formState, setFormState] = useState(initialState);
  const [passwordError, setPasswordError] = useState(false); //name and password validation

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accounts = useSelector(getAccountsSelector);

  const changeFormInputValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendData = (e) => {
    e.preventDefault();

    //name and password checking
    const userFound = accounts.find(
      (account) =>
        account.name === formState.name && //an account from redux after registration
        account.password === formState.password, //fromState from state, always clean
    );

    if (userFound) {
      dispatch(registration(userFound));
      navigate('/allbooks');
    } else {
      setPasswordError(true);
      setTimeout(() => {
        setPasswordError(false); //return the state for a new attempt if password or name are incorrect
      }, 2000);
    }
  };

  return (
    <AuthForm
      array={config}
      state={formState}
      title="Log In to Fox Library"
      buttonTitle="Log In"
      onSubmit={sendData}
      onChange={changeFormInputValue}
      passwordError={passwordError}
    />
  );
};

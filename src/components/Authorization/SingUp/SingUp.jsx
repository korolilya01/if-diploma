import React from 'react';

import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Input } from '../../Input';

import { registration } from '../../../store/slices/authorization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../../store/selectors/authorization.selector';

import { config } from './config';

import './SingUp.scss';

export const SingUp = () => {
  const dispatch = useDispatch();
  const state = useSelector(authSelector);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch(registration({ [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <Icon iconHref="#cross" className="form__cross" />
      <div className="form__container">
        <p className="form__title">Welcome to Fox Library</p>
        {config.map((item) => {
          return (
            <Input
              key={item.name}
              {...item}
              value={state[item.name]}
              labelId={item.name}
              id={item.name}
              content={item.name}
              labelClassName="form__label"
              inputClassName="form__input"
              onChange={onChange}
            />
          );
        })}
        <Button className="form__button" content="Sign up" />
      </div>
    </form>
  );
};

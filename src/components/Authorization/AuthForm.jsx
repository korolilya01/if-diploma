import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { Notification } from '../Notification';

import './AuthForm.scss';
import classNames from 'classnames';

export const AuthForm = ({
  title,
  array,
  buttonTitle,
  state,
  onChange,
  onSubmit,
  passwordError,
}) => {
  return (
    <div className="form-block">
      <form className="form" onSubmit={onSubmit}>
        <Link to="/">
          <Icon iconHref="#cross" className="form__cross" />
        </Link>
        <div className="form__container">
          <h2 className="form__title">{title}</h2>
          {array.map((item) => {
            const { name, labelName } = item;
            return (
              <Input
                key={name}
                {...item}
                value={state[name]}
                labelId={labelName}
                id={labelName}
                content={labelName}
                labelClassName="form__label"
                inputClassName="form__input"
                onChange={onChange}
              />
            );
          })}
          {/*massage if password or name are incorrect*/}
          {passwordError && (
            <Notification
              className="notification__authForm"
              message="User not found"
            />
          )}
          <Button
            className={classNames(
              'form__button',
              passwordError ? 'form__button-shake' : '',
            )}
            content={buttonTitle}
          />
        </div>
      </form>
    </div>
  );
};

import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Input } from '../Input';

import './AuthForm.scss';
import classNames from 'classnames';

export const AuthForm = ({
  title,
  array,
  buttonTitle,
  state,
  onChange,
  closeField,
  onSubmit,
  passwordError,
}) => {
  return (
    <div className="form-block">
      <form className="form" onSubmit={onSubmit}>
        <Link to="/">
          {' '}
          <Icon
            onClick={closeField}
            iconHref="#cross"
            className="form__cross"
          />
        </Link>
        <div className="form__container">
          <p className="form__title">{title}</p>
          {array.map((item) => {
            const { name, labelName } = item;
            return (
              <Input
                key={name}
                {...item}
                value={state[name]}
                labelId={labelName}
                id={labelName}
                content={name}
                labelClassName="form__label"
                inputClassName="form__input"
                onChange={onChange}
              />
            );
          })}
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

import React from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Input } from '../Input';

import './AuthForm.scss';

export const AuthForm = ({
  title,
  array,
  buttonTitle,
  state,
  onChange,
  closeField,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-block">
      <form className="form" onSubmit={onSubmit}>
        <Icon onClick={closeField} iconHref="#cross" className="form__cross" />
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
          <Button className="form__button" content={buttonTitle} />
        </div>
      </form>
    </div>
  );
};

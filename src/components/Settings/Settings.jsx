import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { authSelector } from '../../store/selectors/authorization.selector';
import { registration } from '../../store/slices/authorization.slice';

import { Button } from '../Button';
import { Input } from '../Input';

import { config } from '../Authorization/SignUp/config';

import './Settings.scss';
import classNames from 'classnames';

export const Settings = () => {
  const state = useSelector(authSelector);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch(registration({ [name]: value }));
  };

  const onClick = () => {
    dispatch(registration({ ['password']: state.newPassword }));
  };

  return (
    <form className="settings">
      <div className="settings__container">
        <p className="settings__title">Settings</p>
        <div className="settings__icon"></div>
        <Input
          type="file"
          inputClassName="settings__button-photo-hidden"
          labelId="changePhoto"
          id="changePhoto"
          labelClassName={classNames(
            'settings__button',
            'settings__button-photo',
          )}
          content="Change photo"
        />
        {config.map((item) => {
          const { name, labelName, userLabelName } = item;
          return (
            <Input
              key={name}
              {...item}
              value={state[name]}
              labelId={labelName}
              id={labelName}
              content={name === 'birthdate' ? userLabelName : labelName}
              labelClassName={classNames('form__label-set', 'form__label')}
              inputClassName="form__input"
              onChange={onChange}
            />
          );
        })}
        <Input
          name="newPassword"
          labelId="new password"
          id="new password"
          content="New password"
          labelClassName={classNames('form__label-set', 'form__label')}
          inputClassName="form__input"
          onChange={onChange}
          required
        />
        <Button
          onClick={onClick}
          className={classNames('settings__button', 'settings__button-save')}
          buttonName="saveChange"
          content="Save"
        />
      </div>
    </form>
  );
};

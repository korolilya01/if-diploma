import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../../../../Utils/Button';
import { Icon } from '../../../../Utils/Icon';

import { routeLinks } from '../../../../../constants/routeLinks';

import readingFox from '../../../../../../public/png/readingFox.png';
import './CheckAccountModal.scss';

export const CheckAccountModal = () => {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="modal__container">
        <Link to="/">
          <Icon iconHref="#cross" className="modal__cross" />{' '}
        </Link>

        <img className="modal__img" src={readingFox} alt="Reading Fox" />
        <h2 className="modal__text"> Do you have an account? </h2>
        <div className="modal__buttons">
          <Button
            onClick={() => navigate(routeLinks.login)}
            className="modal__buttons-choose"
            content="Yes"
          />
          <Button
            onClick={() => navigate(routeLinks.signup)}
            className="modal__buttons-choose"
            content="No"
          />
        </div>
      </div>
    </div>
  );
};

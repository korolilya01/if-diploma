import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../../../Button';
import { Icon } from '../../../Icon';

import './CheckAccountModal.scss';
import readingFox from '../../../../../public/png/readingFox.png';

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
            onClick={() => navigate('/login')}
            className="modal__buttons-choose"
            content="Yes"
          />
          <Button
            onClick={() => navigate('/signup')}
            className="modal__buttons-choose"
            content="No"
          />
        </div>
      </div>
    </div>
  );
};

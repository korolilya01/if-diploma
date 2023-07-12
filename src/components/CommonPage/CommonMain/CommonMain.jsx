import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '../../Button';

import './CommonMain.scss';

export const CommonMain = () => {
  const navigate = useNavigate();

  return (
    <main className="main">
      <div className="main__container">
        <h1 className="main__title">BIld your library</h1>
        <h2 className="main__subTitle">
          Over 400.000 books <br /> from fiction to the <br /> business
          literature
        </h2>
        <Button
          onClick={() => navigate('/checkAccount')}
          className="main__button"
          buttonName="start"
          type="submit"
          content="Let’s start"
        />
      </div>
    </main>
  );
};

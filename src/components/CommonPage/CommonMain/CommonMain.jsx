import React from 'react';

import { Button } from '../../Button';

import './CommonMain.scss';

export const CommonMain = () => {
  return (
    <main className="main">
      <div className="main__container">
        <h1 className="main__title">BIld your library</h1>
        <h2 className="main__subTitle">
          Over 400.000 books <br /> from fiction to the <br /> business
          literature
        </h2>
        <Button
          className="main__button"
          buttonName="start"
          type="submit"
          content={<p className="main__button-style">Let’s start</p>}
        />
      </div>
    </main>
  );
};

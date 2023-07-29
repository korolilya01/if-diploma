import React from 'react';

import { Outlet } from 'react-router-dom';

import { Container } from '../../Utils/Container';
import { CommonHeader } from './CommonHeader';
import { CommonMain } from './CommonMain';

import './CommonPage.scss';

export const CommonPage = () => {
  return (
    <>
      <Outlet />
      <div className="commonPage">
        <Container>
          <CommonHeader />
          <CommonMain />
        </Container>
      </div>
    </>
  );
};

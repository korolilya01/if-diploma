import React from 'react';

import { CommonHeader } from './CommonHeader';
import { CommonMain } from './CommonMain';
import { Container } from '../Container';

import './CommonPage.scss';

export const CommonPage = () => {
  return (
    <div className="commonPage">
      <Container>
        <CommonHeader />
        <CommonMain />
      </Container>
    </div>
  );
};

import React from 'react';

import { Container } from '../Container';
import { CommonHeader } from './CommonHeader';
import { CommonMain } from './CommonMain';
import { LogIn } from '../Authorization/LogIn';
import { SingUp } from '../Authorization/SingUp';

import { useCommonPageContext } from './CommonPage.context';

import './CommonPage.scss';

export const CommonPage = () => {
  const { isRegistrationOpen, isLohInOpen } = useCommonPageContext();

  return (
    <div className="commonPage">
      {isRegistrationOpen && <SingUp />}
      {isLohInOpen && <LogIn />}
      <Container>
        <CommonHeader />
        <CommonMain />
      </Container>
    </div>
  );
};

import React from 'react';

import { UserHeader } from './UserHeader';
// import { UserMain } from './UserMain';
import { Footer } from '../Footer';
import { Container } from '../Container';
import { Outlet } from 'react-router-dom';

import './UserPage.scss';

export const UserPage = () => {
  return (
    <div className="userPage">
      <Outlet />
      <Container>
        <UserHeader />
        {/*<UserMain />*/}
      </Container>
      <Footer />
    </div>
  );
};

import React from 'react';

import { Outlet } from 'react-router-dom';

import { Container } from '../Container';
import { Footer } from '../Footer';
import { UserHeader } from './UserHeader';

import './UserPage.scss';

export const UserPage = () => {
  return (
    <div className="userPage">
      <Container>
        <UserHeader />
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

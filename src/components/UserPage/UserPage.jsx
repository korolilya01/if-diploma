import React from 'react';

import { UserHeader } from './UserHeader';
// import { UserMain } from './UserMain';
import { Footer } from '../Footer';
import { Container } from '../Container';
import { Outlet } from 'react-router-dom';

export const UserPage = () => {
  return (
    <>
      <Outlet />
      <Container>
        <UserHeader />
        {/*<UserMain />*/}
      </Container>
      <Footer />
    </>
  );
};

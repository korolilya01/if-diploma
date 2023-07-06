import React from 'react';

import { UserHeader } from './UserHeader';
// import { UserMain } from './UserMain';
import { Footer } from '../Footer';
import { Container } from '../Container';

export const UserPage = () => {
  return (
    <>
      <Container>
        <UserHeader />
        {/*<UserMain />*/}
      </Container>
      <Footer />
    </>
  );
};

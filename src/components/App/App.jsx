import React from 'react';
import { Header } from '../Header';
import { Sprites } from '../Sprites';
import { Container } from '../Container';
import { Main } from '../Main';

export function App() {
  return (
    <>
      <Sprites />
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
}

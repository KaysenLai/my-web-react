import React from 'react';
import './HomePage.scss';
import { Container, Typography } from '@material-ui/core';

const HomePage: React.FC = () => {
  return (
    <main className="home-page">
      <section className="intro">
        <Container>
          <Typography variant="body1">className="home-page"</Typography>
        </Container>
      </section>
      <section className="cards">
        <Container>
          <Typography variant="body1">className="home-page"</Typography>
        </Container>
      </section>
    </main>
  );
};

export default HomePage;

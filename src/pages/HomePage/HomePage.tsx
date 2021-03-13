import React from 'react';
import './HomePage.scss';
import { Container, Typography, Hidden, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import photo from '../../assets/img/home-page-photo.jpg';
import photoMask from '../../assets/img/home-page-photo-mask.png';
import GhostButton from '../../components/GhostButton/GhostButton';

const HomePage: React.FC = () => {
  return (
    <main className="home-page">
      <section className="intro">
        <div className="intro__background">
          <div className="background-photo background-photo-mask" style={{ backgroundImage: `url(${photoMask})` }} />
          <div className="background-photo background-photo-main" style={{ backgroundImage: `url(${photo})` }} />
        </div>
        <Container>
          <div className="intro__content">
            <Grid className="intro__content-container" container alignItems="center" xs={12}>
              <Hidden xsDown>
                <Grid item sm={1} md={3} lg={4} />
              </Hidden>
              <Grid className="intro__content-item" container justify="flex-end" item xs={12} sm={11} md={9} lg={7}>
                <Grid className="intro__content-text" item container xs={12}>
                  <Grid item>
                    <p>I'm a</p>
                  </Grid>
                  <Grid item>
                    <p>web developer.</p>
                  </Grid>
                </Grid>
                <Grid item container alignItems="center" xs={12}>
                  <Grid item>
                    <span className="intro-name">Chaokai Lai</span>
                  </Grid>
                  <Grid item>
                    <GhostButton />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
      <section className="cards">
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

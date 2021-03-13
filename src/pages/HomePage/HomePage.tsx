import React from 'react';
import './HomePage.scss';
import { Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import photo from '../../assets/img/home-page-photo.jpg';
import photoMask from '../../assets/img/home-page-photo-mask.png';

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
            <div className="intro__content-text">
              {/*<h2>i’m a <br><span className="home__header__intro-content__text__typed-text"/></h2>*/}
              <div className="intro__content-text__wrap">
                <h3>chaokai lai</h3>
                <Link to="/resume">
                  <button className="ghost-button">resume</button>
                </Link>
              </div>
            </div>
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

import React from 'react';
import './HomePage.scss';
import { Container, Typography, Hidden, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import photo from '../../assets/img/home-page-photo.jpg';
import photoMask from '../../assets/img/home-page-photo-mask.png';
import GhostButton from '../../components/GhostButton/GhostButton';
import Typed from 'react-typed';
import SkillCard from '../../components/skillCard/skillCard';
import codeIcon from '../../assets/img/skill-code.png';
import designIcon from '../../assets/img/skill-design.png';
import cameraIcon from '../../assets/img/skill-camera.png';
import lightIcon from '../../assets/img/skill-light.png';
import { skillCards } from '../../types';

const skillCards: skillCards = [
  {
    title: 'code',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque delectus, dolorem ' +
      'et minus nobis nostrum obcaecati officiis.',
    icon: codeIcon,
  },
  {
    title: 'design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque delectus, dolorem ' +
      'et minus nobis nostrum obcaecati officiis.',
    icon: designIcon,
  },
  {
    title: 'photography',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque delectus, dolorem ' +
      'et minus nobis nostrum obcaecati officiis.',
    icon: cameraIcon,
  },
  {
    title: 'light',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque delectus, dolorem ' +
      'et minus nobis nostrum obcaecati officiis.',
    icon: lightIcon,
  },
];

const HomePage: React.FC = () => {
  const history = useHistory();
  const handleOnclick = () => {
    history.push('/resume');
  };

  return (
    <main className="home-page">
      <section className="intro">
        <div className="intro__background">
          <div className="background-photo background-photo-mask" style={{ backgroundImage: `url(${photoMask})` }} />
          <div className="background-photo background-photo-main" style={{ backgroundImage: `url(${photo})` }} />
        </div>
        <Container>
          <div className="intro__content">
            <Grid className="intro__content-container" container alignItems="center">
              <Hidden xsDown>
                <Grid item sm={1} md={3} lg={4} />
              </Hidden>
              <Grid className="intro__content-item" container justify="flex-end" item xs={12} sm={11} md={9} lg={7}>
                <Grid className="intro__content-text" item container xs={12}>
                  <Grid item xs={12} md="auto">
                    <p>I'm a</p>
                  </Grid>
                  <Grid item className="element">
                    <Typed
                      strings={['Web developer.', 'Designer.', 'Photographer.']}
                      typeSpeed={100}
                      backSpeed={70}
                      className="intro-typed"
                      loop={true}
                      backDelay={3000}
                    />
                  </Grid>
                </Grid>
                <Grid className="intro-name-grid" item container alignItems="center" xs={12}>
                  <Grid item xs={12} sm="auto">
                    <span className="intro-name">Chaokai Lai</span>
                  </Grid>
                  <Grid item>
                    <GhostButton title="resume" width={122} onClick={handleOnclick} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
      <section className="skill">
        <Container>
          <h2>Skill</h2>
          <div className="skill-cards">
            <Grid container justify="center">
              <Grid container item spacing={4} xs={12} sm={10} md={12}>
                {skillCards.map((item) => (
                  <Grid item xs={6} md={3} key={item.title}>
                    <SkillCard title={item.title} description={item.description} icon={item.icon} />
                  </Grid>
                ))}
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
    </main>
  );
};

export default HomePage;

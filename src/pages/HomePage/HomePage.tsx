import React from 'react';
import './HomePage.scss';
import { Container, Hidden, Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import photo from '../../assets/img/home-page-photo.jpg';
import photoMask from '../../assets/img/home-page-photo-mask.png';
import GhostButton from '../../components/GhostButton/GhostButton';
import Typed from 'react-typed';
import SkillCard from '../../components/SkillCard/SkillCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import skillCards from '../../mock/skill-card';
import projectCards from '../../mock/project-card';
import { Link } from 'react-router-dom';

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
                    <Link to="/resume">
                      <GhostButton title="resume" width={122} />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
      <section className="skill section--padding">
        <Container>
          <h2>Skills</h2>
          <Grid container justify="center">
            <Grid container item spacing={5} xs={12} sm={10} md={12}>
              {skillCards.map((item) => (
                <Grid item xs={6} md={3} key={item.title}>
                  <SkillCard title={item.title} description={item.description} icon={item.icon} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="project">
        <div className="project__mask" />
        <Container className="section--padding">
          <h2>Projects</h2>
          <Grid container justify="center">
            <Grid container item spacing={5} xs={12}>
              {projectCards.map((item) => (
                <Grid item xs={12} sm={6} key={item.title}>
                  <ProjectCard title={item.title} url={item.url} img={item.img} theme={item.theme} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="project">
        <Container className="section--padding">
          <h2>Gallery</h2>
          <Grid container justify="center">
            <Grid container item spacing={5} xs={12}>
              {projectCards.map((item) => (
                <Grid item xs={12} sm={6} key={item.title}>
                  <ProjectCard title={item.title} url={item.url} img={item.img} theme={item.theme} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="contact">
        <div className="contact-wrapper">
          <h3 className="title-font">feel free to contact me</h3>
          <Link to="/contact">
            <Button className="contact-btn">Contact Now</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

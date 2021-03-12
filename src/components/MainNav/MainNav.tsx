import React from 'react';
import './MainNav.scss';
import { AppBar, Tabs, Tab, Container } from '@material-ui/core';
import navLogo from '../../assets/img/logo-css-sprites.png';
import { Link } from 'react-router-dom';
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" className="main-nav">
      <Container className="main-nav-container">
        <Link to="/" className="main-nav__logo" style={{ backgroundImage: `url(${navLogo})` }} />
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label={<Link to="/">Home</Link>} />
          <Tab label={<Link to="/resume">Resume</Link>} />
          <Tab label={<Link to="/gallery">Gallery</Link>} />
          <Tab label={<Link to="/contact">Contact</Link>} />
        </Tabs>
      </Container>
    </AppBar>
  );
}

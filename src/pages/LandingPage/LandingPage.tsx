import React from 'react';
import './LandingPage.scss';

import logo from '../../assets/img/logo_white.svg';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <>
      <nav className="landing-nav">
        <div className="landing-nav__container">
          <img className="landing-nav__logo" src={logo} alt="logo" />
          <div className="landing-nav__wrap">
            <ul>
              <li>Why Easy-Grade?</li>
              <li>Pricing</li>
              <Link to="/saga-demo">
                <li>Demo</li>
              </Link>
              <li>About us</li>
              <li>Get Help</li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <section>
          <div className="page-container" style={{ backgroundColor: '#c9c9fd' }}>
            landing page 1
          </div>
        </section>
        <section style={{ backgroundColor: '#c1c1c1' }}>
          <div className="page-container" style={{ backgroundColor: '#c9fdf3' }}>
            landing page 2
          </div>
        </section>
        <section>
          <div className="page-container" style={{ backgroundColor: '#c9c9fd' }}>
            landing page 3
          </div>
        </section>
        <section style={{ backgroundColor: '#c1c1c1' }}>
          <div className="page-container" style={{ backgroundColor: '#c9fdf3' }}>
            landing page 4
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;

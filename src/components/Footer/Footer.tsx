import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerNavs = [
    { title: 'Home', path: '/' },
    { title: 'Resume', path: '/resume' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <section className="footer__content__icon">
          <img src="/images/footer-logo.png" alt="my logo" />
        </section>
        <section className="footer__content__about-web">
          <div>
            <h2>About the web</h2>
            <div className="footer__content__about-web__content">
              <p>This web will be refactored by react soon. At that time, more contents will added.</p>
            </div>
          </div>
        </section>
        <section className="footer__content__links">
          <div>
            <h2>Links</h2>
            <nav className="footer__content__links__nav">
              <ul>
                {footerNavs.map((item: any, index: number) => (
                  <li>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
        <section className="footer__content__contact">
          <div>
            <h2>Contact</h2>
            <div className="footer__content__contact__content">
              <div>
                <p>
                  <span>Email: </span>chaokai.lai@gmail.com
                </p>
                <p>
                  <span>Location: </span>Brisbane, Queensland, AU
                </p>
                <p>
                  <span>Phone: </span>+61 0488 888 888
                </p>
              </div>
              <div className="footer__content__contact__content__social-icons"></div>
            </div>
          </div>
        </section>
      </div>
      <div className="footer__copyright">
        <h3>Designed and developed by Chaokai Lai.</h3>
        <h3>©All Rights Reserved</h3>
      </div>
    </footer>
  );
};

export default Footer;

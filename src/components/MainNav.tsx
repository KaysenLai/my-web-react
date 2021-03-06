import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    title: 'Home Page',
    path: '/',
  },
  {
    title: 'Ben Page',
    path: '/ben-page',
  },
  {
    title: 'chaokai page',
    path: '/chaokai-page',
  },
  {
    title: 'Jin Page',
    path: '/jin-page',
  },
  {
    title: 'Lin Page',
    path: '/lin-page',
  },
  {
    title: 'Shawn Page',
    path: '/shawn-page',
  },
  {
    title: 'Yuming Page',
    path: '/yuming-page',
  },
  {
    title: 'Zhian Page',
    path: '/zhian-page',
  },
];

const MainNav: React.FC = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;

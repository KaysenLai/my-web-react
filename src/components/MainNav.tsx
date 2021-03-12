import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Resume',
    path: '/resume',
  },
  {
    title: 'Gallery',
    path: '/gallery',
  },
  {
    title: 'Contact',
    path: '/contact',
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

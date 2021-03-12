import React, { useMemo } from 'react';
import './MainNav.scss';
import { AppBar, Drawer, Tabs, Tab, Container, Hidden, IconButton } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import navLogo from '../../assets/img/logo-css-sprites.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { useWindowWidth } from '@react-hook/window-size';
import { useLocation } from 'react-router-dom';
import { NavLinks } from '../../types';

const navLinks: NavLinks = [
  { title: 'Home', path: '/' },
  { title: 'Resume', path: '/resume' },
  { title: 'Gallery', path: '/gallery' },
  { title: 'Contact', path: '/contact' },
];

const navIndex: any = {
  home: 0,
  resume: 1,
  gallery: 2,
  contact: 3,
};

const findNavIndex = (pathName: string) => {
  const pathArr = pathName.split('/');
  const path = pathArr[1];
  if (path === '') return 0;
  if (navIndex.hasOwnProperty(path)) return navIndex[path];
};

const MainNav: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  useMemo(() => {
    setValue(findNavIndex(pathname));
  }, [pathname]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onlyWidth = useWindowWidth();
  useMemo(() => {
    if (onlyWidth > 960) {
      setOpen(false);
    }
  }, [onlyWidth]);

  return (
    <AppBar position="static" className="main-nav">
      <Container className="main-nav-container">
        <Link to="/" className="main-nav__logo" style={{ backgroundImage: `url(${navLogo})` }} />
        <Hidden smDown>
          <Tabs value={value} onChange={handleChange} indicatorColor="primary">
            {navLinks.map((item, index) => (
              <Tab key={index} label={<Link to={item.path}>{item.title}</Link>} />
            ))}
          </Tabs>
        </Hidden>
        <Hidden mdUp>
          <IconButton onClick={toggleDrawer} color="inherit" edge="start">
            <MenuIcon fontSize="large" />
          </IconButton>
        </Hidden>
        <Drawer
          anchor="left"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <List>
            {navLinks.map((item, index) => (
              <ListItem
                button
                key={item.title}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Link to={item.path}>
                  <ListItemText primary={item.title} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default MainNav;

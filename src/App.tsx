import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import MainNav from './components/MainNav/MainNav';
import HomePage from './pages/HomePage/HomePage';
import ResumePage from './pages/ResumePage/ResumePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

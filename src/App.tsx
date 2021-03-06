import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DemoSage from './pages/DemoSaga/DemoSage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/saga-demo" component={DemoSage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

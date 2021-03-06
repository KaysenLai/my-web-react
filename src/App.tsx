import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/*<Route exact path="/saga-demo" component={DemoSage} />*/}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

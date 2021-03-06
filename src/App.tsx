import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import MainNav from './components/MainNav';
import HomePage from './pages/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/*<Route exact path="/saga-demo" component={DemoSage} />*/}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

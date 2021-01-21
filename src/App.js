import React from 'react';

import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/" exact component={ErrorPage} />
    </Switch>
  );
}

export default App;

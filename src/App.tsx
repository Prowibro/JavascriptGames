import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/styles.global.scss';
import Home from './pages/Home';
import Tictactoe from './pages/Tictactoe';
import NotFound from './pages/NotFound';

export enum pathNames {
  home = '/home',
  tictactoe = '/tictactoe',
  pageNotFound = '/notfound',
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={pathNames.tictactoe} component={Tictactoe} />
        <Route path={pathNames.home} component={Home} />
        <Route path={pathNames.pageNotFound} component={NotFound} />
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

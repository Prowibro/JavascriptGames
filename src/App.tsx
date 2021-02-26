import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/styles.global.scss';
import Home from './pages/Home';
import Tictactoe from './pages/Tictactoe';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tictactoe" component={Tictactoe} />
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

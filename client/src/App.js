import React from 'react';
import './App.css';
import CurrentGame from './containers/CurrentGame'
import Profile from './containers/Profile'
import Friends from './containers/Friends'
import Games from './containers/Games'
import Nav from './containers/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={CurrentGame} />
        <Route path='/profile' component={Profile} />
        <Route path='/games' component={Games} />
        <Route path='/friends' component={Friends} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Games from './containers/Games'
import Friends from './containers/Friends'
import Nav from './containers/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Nav />
        <Route path='/' component={App} />
        <Route path='/games' component={Games} />
        <Route path='/friends' component={Friends} />
      </Switch>
    </Router>
  );
}

export default App;

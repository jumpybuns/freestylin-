// import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../Home/Home.js';
import AboutMe from '../AboutMe/AboutMe.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link className="link1" to="/aboutMe">
            About Me
          </Link>
          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              exact
              path="/aboutme"
              render={(routerProps) => <AboutMe {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

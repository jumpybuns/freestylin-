// import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home.js';
import AboutMe from '../AboutMe/AboutMe.js';
import NavBar from '../NavBar/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
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

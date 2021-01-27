// import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home.js';
import AboutMe from '../AboutMe/AboutMe.js';
// import NavBar from '../NavBar/NavBar';
import CSSFun from '../CSS FUN/CSSFun';
import CSS2 from '../CSS2/CSS2.js';
import LayeredText from '../LayeredText/LayeredText';
import Underline from '../Underline/Underline';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
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
            <Route
              exact
              path="/css"
              render={(routerProps) => <CSSFun {...routerProps} />}
            />
            <Route
              exact
              path="/css2"
              render={(routerProps) => <CSS2 {...routerProps} />}
            />
            <Route
              exact
              path="/layeredtext"
              render={(routerProps) => <LayeredText {...routerProps} />}
            />
            <Route
              exact
              path="/underline"
              render={(routerProps) => <Underline {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

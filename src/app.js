import './App.css';
import React, { Component } from 'react';
import {
  BrowswerRouter as Router,
  // Route,
  // Switch,
  Link,
} from 'react-router-dom';
import Header from './Header.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Link className="link1" to="/aboutMe">
            About Me
          </Link>
        </Router>
      </div>
    );
  }
}

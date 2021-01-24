import styles from './AboutMe.css';
import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className={styles.home}>
          Home Sweet Home, <br></br>Feels good doesnt it!<br></br>
          Now lets get to work...
        </div>
        <div className={styles.home2}>
          Go ahead and sign up, <br></br> we can make a list.
        </div>
      </div>
    );
  }
}

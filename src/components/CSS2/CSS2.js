import React, { Component } from 'react';
import styles from './CSS2.css';

export default class CSS2 extends Component {
  render() {
    return (
      <div>
        <span>
          <p className={styles.text}>hover or tap me</p>
        </span>
        <p className={styles.text}>hover or tap me</p>
      </div>
    );
  }
}

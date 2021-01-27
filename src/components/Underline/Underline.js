import React, { Component } from 'react';
import styles from './Underline.css';

export default class Underline extends Component {
  render() {
    return (
      <div>
        <div className={styles.perspectiveText}>
          <div className={styles.perspectiveLine}>
            <p></p>
            <p>Reality</p>
          </div>
          <div className={styles.perspectiveLine}>
            <p>Reality</p>
            <p>Is Only</p>
          </div>
          <div className={styles.perspectiveLine}>
            <p>Is Only</p>
            <p>A Matter Of</p>
          </div>
          <div className={styles.perspectiveLine}>
            <p>A Matter Of</p>
            <p>Perception</p>
          </div>
          <div className={styles.perspectiveLine}>
            <p>Perception</p>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

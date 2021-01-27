import React, { Component } from 'react';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.middle}>
        <p className={styles.text1}>This is my webpage. total skateboard</p>
        <button className={styles.btn}>HARDPUSH</button>
        <p className={styles.text2}>
          Boogaloo boogaloo boogaloo This paragraph contains some text. The
          lines will break at any character.This paragraph contains some text.
          The lines will break at any character.This paragraph contains some
          text. The lines will break at any character.This paragraph contains
          some text. The lines will break at any character.This paragraph
          contains some text. The lines will break at any character.
        </p>
      </div>
    );
  }
}

import React, { Component } from 'react';
import style from './CSSFun.css';

export default class CSSFun extends Component {
  render() {
    return (
      <div>
        <div className={style.container}>
          <div className={style.c}></div>
          <div className={style.s}>
            <div className={style.c}></div>
            <div className={style.c}></div>
          </div>
          <div className={style.s}>
            <div className={style.css}></div>
            <div className={style.c}></div>
          </div>
        </div>
      </div>
    );
  }
}

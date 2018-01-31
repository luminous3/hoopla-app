import React, { Component } from 'react';
import styles from './Content.css';

export class Loader extends Component {
  render() {
    return (
      <div className={styles.loading}>
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;

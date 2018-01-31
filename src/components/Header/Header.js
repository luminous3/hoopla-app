import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className={styles.wrapper}>Welcome</div>
      </nav>
    );
  }
}

export default Header;

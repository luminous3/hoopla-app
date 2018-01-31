import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className={styles.wrapper}>
          <Link to="/">Hoopla</Link>
        </div>
      </nav>
    );
  }
}

export default Header;

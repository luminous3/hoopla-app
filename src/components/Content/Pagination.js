import React, { Component } from 'react';
import { Link } from 'react-router';

import { PER_PAGE } from '../../constants/content';
import styles from './Content.css';

export class Pagination extends Component {
  render() {
    const { items, resultPage } = this.props;
    const pages = Math.ceil(items.length / PER_PAGE);

    const linkId = parseInt(resultPage, 10);
    const emptyDiv = <li className={styles.nav} />;
    let leftNav = emptyDiv;
    if (resultPage > 1) {
      leftNav = (
        <li className={styles.nav}>
          <Link to={`/pages/${linkId - 1}`}>PREVIOUS</Link>
        </li>
      );
    }

    let rightNav = emptyDiv;
    if (resultPage < pages) {
      rightNav = (
        <li className={`${styles.nav} ${styles.right_nav}`}>
          <Link to={`/pages/${linkId + 1}`}>NEXT</Link>
        </li>
      );
    }

    const lowEnd = (resultPage - 1) * PER_PAGE + 1;
    let highEnd = resultPage * PER_PAGE;
    if (highEnd > items.length) {
      highEnd = items.length;
    }

    return (
      <ul className={styles.pagination_wrapper}>
        {leftNav}
        <div className={styles.showing}>
          SHOWING {lowEnd}-{highEnd}
        </div>
        {rightNav}
      </ul>
    );
  }
}

export default Pagination;

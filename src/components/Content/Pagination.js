import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import { PER_PAGE } from '../../constants/content';
import styles from './Content.css';

export class Pagination extends Component {
  render() {
    const { items, resultPage } = this.props;
    const pages = Math.ceil(items.length / 6);

    const linkId = parseInt(resultPage);
    const emptyDiv = (
      <li>
        <a href="" />
      </li>
    );
    let leftNav = emptyDiv;
    if (resultPage > 1) {
      leftNav = (
        <li>
          <Link to={`/pages/${linkId - 1}`}>PREVIOUS</Link>
        </li>
      );
    }

    let rightNav = emptyDiv;
    if (resultPage < pages) {
      rightNav = (
        <li>
          <Link to={`/pages/${linkId + 1}`}>NEXT</Link>
        </li>
      );
    }

    const lowEnd = (resultPage - 1) * PER_PAGE + 1;
    const highEnd = resultPage * PER_PAGE;

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

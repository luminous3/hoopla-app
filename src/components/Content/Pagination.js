import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Content.css';
import _ from 'lodash';

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
          <Link to={ `/pages/${linkId + 1}`}>NEXT</Link>
        </li>
      );
    }
    return (
      <ul className={styles.pagination_wrapper}>
        {leftNav}
        {rightNav}
      </ul>
    );
  }
}

export default Pagination;

import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Content.css';
import _ from 'lodash';

export class Pagination extends Component {
  render() {
    const { items, resultPage } = this.props;
    const pages = Math.ceil(items.length / 10);

    const linkId = parseInt(resultPage);
    return (
      <div className={styles.pagination}>
        <ul className="pagination">
          <li className={resultPage === 1 ? 'disabled' : ''}>
            <Link to={resultPage > 1 ? `/pages/${linkId - 1}` : null}>
              <i className="material-icons">chevron_left</i>
            </Link>
          </li>

          <li className={resultPage === pages + 1 ? 'disabled' : ''}>
            <Link to={resultPage < 10 ? `/pages/${linkId + 1}` : null}>
              <i className="material-icons">chevron_right</i>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;

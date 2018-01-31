import React, { Component } from 'react';
import styles from './Item.css';

export class Item extends Component {
  render() {
    const { artKey } = this.props;
    debugger;
    return (
      <li className={styles.item}>
        <a
          href={`https://d2snwnmzyr8jue.cloudfront.net/${artKey}_270.jpeg`}
          target="_blank"
        >
          <img
            src={`https://d2snwnmzyr8jue.cloudfront.net/${artKey}_270.jpeg`}
            alt="Preview"
          />
        </a>
      </li>
    );
  }
}

export default Item;

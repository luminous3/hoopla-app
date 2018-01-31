import React, { Component } from 'react';
import styles from './Item.css';

export class Item extends Component {
  render() {
    const { artKey, artistName, title } = this.props;

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
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.artist}>{artistName}</div>
        </div>
      </li>
    );
  }
}

export default Item;

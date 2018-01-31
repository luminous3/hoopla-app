import React, { Component } from 'react';
import styles from './Item.css';

export class Item extends Component {
  render() {
    const { url, images } = this.props;
    return (
      <li className={styles.item}>
        <a href={url} target="_blank">
          <img src={images.fixed_width_downsampled.url} alt="Preview" />
        </a>
      </li>
    );
  }
}

export default Item;

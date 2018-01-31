import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../redux/actions';
import Loader from './Loader';
import Item from './Item/Item';
import styles from './Content.css';

export class Content extends Component {
  componentWillMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  renderItems() {
    const { items } = this.props;
    return items.map(({ titleId, artKey, artistName, title }) => {
      return (
        <Item
          key={titleId}
          artKey={artKey}
          title={title}
          artistName={artistName}
        />
      );
    });
  }

  render() {
    const { items, isFetching } = this.props;
    let content = null;

    if (isFetching) {
      content = <Loader />;
    } else {
      if (items.length) {
        content = <ul className={styles.wrapper}>{this.renderItems()}</ul>;
      }
    }

    return <div>{content}</div>;
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    isFetching: state.isFetching
  };
}

const mapDispatchToProps = {
  fetchItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

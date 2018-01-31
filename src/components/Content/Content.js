import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchItems } from '../../redux/actions';
import { PER_PAGE } from '../../constants/content';
import Loader from './Loader';
import Item from './Item/Item';
import Pagination from './Pagination';
import styles from './Content.css';

export class Content extends Component {
  componentWillMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  renderItems() {
    const { items } = this.props;
    let newItems = [];
    const resultPage = this.props.params.id;

    if (resultPage) {
      const lowRange = (resultPage - 1) * PER_PAGE;
      newItems = items.slice(lowRange, lowRange + PER_PAGE);
    } else {
      newItems = items.slice(0, PER_PAGE);
    }

    return newItems.map(({ titleId, artKey, artistName, title }) => {
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
    const resultPage = this.props.params.id ? this.props.params.id : 1;

    const { items, isFetching } = this.props;
    let content = null;

    if (isFetching) {
      content = <Loader />;
    } else {
      if (items.length) {
        content = <ul className={styles.wrapper}>{this.renderItems()}</ul>;
      }
    }

    return (
      <div>
        <Pagination items={items} resultPage={resultPage} />
        {content}
      </div>
    );
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

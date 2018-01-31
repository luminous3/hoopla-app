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
    return items.map(({ id, images, url }) => {
      return <Item key={id} url={url} images={images} />;
    });
  }

  render() {
    const { items, isFetching } = this.props;

    return (
      <div className="container">
        {isFetching && <Loader />}
        {!isFetching &&
          items.length && (
            <ul className={styles.wrapper}>{this.renderItems()}</ul>
          )}
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

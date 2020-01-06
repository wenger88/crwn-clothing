import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreviewComponent from '../../components/preview-collection/collection-preview.component';

class ShopComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreviewComponent key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}

export default ShopComponent;

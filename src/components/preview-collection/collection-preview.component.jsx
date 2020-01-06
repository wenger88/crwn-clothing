import React from 'react';
import './collection-preview.styles.scss';
import CollectionItemComponent from '../collection-item/collection-item.component';

const CollectionPreviewComponent = ({ title, items, routeName }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItemComponent key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreviewComponent;

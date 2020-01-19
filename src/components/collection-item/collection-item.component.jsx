import React from 'react';
import './collection-item.styles.scss';
import CustomButtonComponent from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart-actions';
const CollectionItemComponent = ({ item, addCartItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButtonComponent inverted onClick={() => addCartItem(item)}>
        Add to cart
      </CustomButtonComponent>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItemComponent);

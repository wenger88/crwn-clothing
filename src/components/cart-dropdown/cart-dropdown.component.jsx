import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButtonComponent from "../custom-button/custom-button.component";

const CartDropdownComponent = (props) => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButtonComponent>GO TO CHECKOUT</CustomButtonComponent>
  </div>
);

export default CartDropdownComponent;
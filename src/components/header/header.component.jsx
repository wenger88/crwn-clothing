import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/071 crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIconComponent from '../cart-icon/cart-icon.component';
import CartDropdownComponent from '../cart-dropdown/cart-dropdown.component';
const HeaderComponent = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
      )}
      <CartIconComponent />
    </div>
    {hidden ? null : <CartDropdownComponent />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(HeaderComponent);

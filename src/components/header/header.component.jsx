import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/071 crown.svg';
const HeaderComponent = props => (
  <div className="header">
      <Link className='logo-container' to="/" >
          <Logo className='logo'/>
      </Link>
      <div className='options'>
          <Link to='/shop' className='option'>SHOP</Link>
          <Link to='/contact' className='option'>CONTACT</Link>
      </div>
  </div>
);

export default HeaderComponent;

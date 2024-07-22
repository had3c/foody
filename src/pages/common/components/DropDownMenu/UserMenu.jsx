import React from 'react';
import { Link } from 'react-router-dom';
import style from './User.module.css';

const UserMenu = ({ closeDropdown }) => {
  const handleLinkClick = () => {
    closeDropdown(); 
  };

  return (
    <div className={style.dropDown}>
      <ul>
        <li><Link to="/user" onClick={handleLinkClick}>Profile</Link></li>
        <li><Link to="/user/basket" onClick={handleLinkClick}>Your Basket</Link></li>
        <li><Link to="/user/orders" onClick={handleLinkClick}>Your Orders</Link></li>
        <li><Link to="/user/checkout" onClick={handleLinkClick}>Checkout</Link></li>
        <li><Link to="/" onClick={handleLinkClick}>Logout</Link></li>
      </ul>
    </div>
  );
};

export default UserMenu;
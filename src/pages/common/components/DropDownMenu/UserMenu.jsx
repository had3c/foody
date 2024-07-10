import React from 'react'
import { Link } from 'react-router-dom';
import style from './User.module.css'

function UserMenu() {
  return (
    <div className={style.dropDown}>
        <ul>
        <li><Link to="/user">Profile</Link></li>
        <li><Link to="/user/basket">Your Basket</Link></li>
        <li><Link to="/user/orders">Your Orders</Link></li>
        <li><Link to="/user/checkout">Checkout</Link></li>
        <li>Logout</li>
        </ul>
        </div>
  )
}

export default UserMenu
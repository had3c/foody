import React from 'react'
import { NavLink } from 'react-router-dom'
import profile from '../../../../assets/icons/people_outline.svg'
import basket from '../../../../assets/icons/shopping_basket.svg'
import style from './SideBar.module.css'

function SideBar() {
  return (
    <div className={style.sideBar}>
      <ul>
        <li><NavLink to='/user'><img src={profile} alt="" />Profile</NavLink></li>
        <li><NavLink to='/user/basket'><img src={basket} alt="" />Your Basket</NavLink></li>
        <li><NavLink to='/user/orders'><img src={basket} alt="" />Your Orders</NavLink></li>
        <li><NavLink to='/user/checkout'><img src={basket} alt="" />Checkout</NavLink></li>
        <li><NavLink to='/'><img src={basket} alt="" />Logout</NavLink></li>
      </ul>

    </div>
  )
}

export default SideBar
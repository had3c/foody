import React from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { useAuth } from '../../../../context/AuthContext';
import { NavLink, useLocation } from 'react-router-dom';
import { MdPeopleOutline } from 'react-icons/md';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import style from './SideBar.module.css';

function SideBar() {
  const { t } = useTranslation();
  const location = useLocation();
  const { generateUserLogoutDatas } = useAuth();
  const getNavLinkStyle = (path) => {
    return {
      color: location.pathname === path || (location.pathname === '/' && path === '/') ? '#d63626' : '#828282',
      backgroundColor: location.pathname === path || (location.pathname === '/' && path === '/') ? '#f0e1e2' : 'transparent',
    };
  };
  const handleLogout = async (e) => {
    e.preventDefault()
    const result = await Swal.fire({
      title: t('Are you sure?'),
      text: t('You must log in again!'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: t('Yes'),
      cancelButtonText: t('Cancel')
    });
  
    if (result.isConfirmed) {
      generateUserLogoutDatas();
  
      Swal.fire({
        title: t('Logout'),
      icon: 'success',
      confirmButtonText: t('OK')
      }).then(() => {
        window.location.href = '/';
      });
    }
  };
  return (
    <div className={style.sideBar}>
      <ul>
        <li>
          <NavLink to='/user' style={getNavLinkStyle('/user')}>
          <MdPeopleOutline size={24}  style={{margin: '0 10px 3px 0' }} />
            {t('Profile')}
          </NavLink>
        </li>
        <li>
          <NavLink to='/user/basket' style={getNavLinkStyle('/user/basket')}>
          <MdOutlineShoppingBasket size={24}  style={{margin: '0 10px 3px 0' }}/>
            {t('Your Basket')}
          </NavLink>
        </li>
        <li>
          <NavLink to='/user/orders' style={getNavLinkStyle('/user/orders')}>
          <MdOutlineShoppingBasket size={24}  style={{margin: '0 10px 3px 0' }}/>
            {t('Your Orders')}
          </NavLink>
        </li>
        <li>
          <NavLink to='/user/checkout' style={getNavLinkStyle('/user/checkout')}>
          <MdOutlineShoppingBasket size={24}  style={{margin: '0 10px 3px 0' }}/>
            {t('Checkout')}
          </NavLink>
        </li>
        <li>
            <NavLink to="/" style={getNavLinkStyle('/')} onClick={handleLogout}>
            <MdOutlineShoppingBasket size={24} style={{margin: '0 10px 3px 0' }}/>
    {t('Logout')}
  </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import style from './User.module.css';
import { useAuth } from '../../../../context/AuthContext';
import { useTranslation } from 'react-i18next';


const UserMenu = ({ closeDropdown }) => {
  const { t } = useTranslation();
  const { generateUserLogoutDatas } = useAuth();

  const handleLinkClick = () => {
    closeDropdown();
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
    <div className={style.dropDown}>
      <ul>
        <li><Link to="/user" onClick={handleLinkClick}>{t('Profile')}</Link></li>
        <li><Link to="/user/basket" onClick={handleLinkClick}>{t('Your Basket')}</Link></li>
        <li><Link to="/user/orders" onClick={handleLinkClick}>{t('Your Orders')}</Link></li>
        <li><Link to="/user/checkout" onClick={handleLinkClick}>{t('Checkout')}</Link></li>
        <li> <Link to="/"  onClick={handleLogout}>
    {t('Logout')}
  </Link></li>
      </ul>
    </div>
  );
};

export default UserMenu;

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import style from './User.module.css';
import '../../style/Swal.css'
import { useAuth } from '../../../../context/AuthContext';
import { useTranslation } from 'react-i18next';


const UserMenu = React.forwardRef(({ setDropDown, fullName}, ref) =>  {
  const { t } = useTranslation();
  const { generateUserLogoutDatas } = useAuth();
  const { navigate } = useNavigate();
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
        navigate('/')
      });
    }
  };
  return (
    <div className={style.dropDown} ref={ref}>
      <ul>
        <li> <span>{fullName || t('User')}</span></li>
        <li><NavLink to="/user" onClick={() => setDropDown(false)}>{t('Profile')}</NavLink></li>
        <li><NavLink to="/user/basket" onClick={() => setDropDown(false)}>{t('Your Basket')}</NavLink></li>
        <li><NavLink to="/user/orders" onClick={() => setDropDown(false)}>{t('Your Orders')}</NavLink></li>
        <li><NavLink to="/user/checkout" onClick={() => setDropDown(false)}>{t('Checkout')}</NavLink></li>
        <li><NavLink to="/" onClick={handleLogout}>
          {t('Logout')}
        </NavLink></li>
      </ul>
    </div>
  );
});

export default UserMenu;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import style from './ResponsNav.module.css';
import '../../style/Swal.css'
import closeMenuIcon from '../../../../assets/icons/Vector.svg';
import avatar from '../../../../assets/icons/avatar.svg'
import { useAuth } from '../../../../context/AuthContext';
import { useProfile } from '../../../../context/ProfileContext';
import { motion, AnimatePresence } from 'framer-motion';

function ResponsNav({ setOpenMenu, openMenu }) {
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const { t } = useTranslation();
    const { profileImage, fullName } = useProfile();
    const { generateUserLogoutDatas } = useAuth();

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

    const closeResponsMenu = () => {
        setOpenMenu(false);
    }
    const getNavLinkStyle = (path) => {
        return {
            color: location.pathname === path || (location.pathname === '/' && path === '/') ? '#d63626' : '#828282',
        };
    };
    return (
        <AnimatePresence>
            {openMenu && (
                <motion.div
                    className={style.navbarBg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeResponsMenu}
                >
                    <motion.div
                        className={style.navbar}
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.5 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={closeMenuIcon} alt="Close menu" onClick={closeResponsMenu} />
                        <div className={style.sign}>
                            {user ? (<div className={style.user}>
                                <img src={profileImage || avatar} alt="" />
                                <span>{fullName || t('User')}</span>
                            </div>

                            ) : (
                                <button className={style.signupBtn} onClick={() => navigate('/login')}>{t('Sign Up')}</button>
                            )}

                        </div>
                        <ul>
                            <li><NavLink to="/" onClick={closeResponsMenu} style={() => getNavLinkStyle('/')}>{t('Home')}</NavLink></li>
                            <li><NavLink to="/restaurants" onClick={closeResponsMenu} style={() => getNavLinkStyle('/restaurants')}>{t('Restaurants')}</NavLink></li>
                            {user ? (<div>
                                <li><NavLink to="/user" onClick={closeResponsMenu} style={() => getNavLinkStyle('/user')}>{t('Profile')}</NavLink></li>
                                <li><NavLink to="/user/basket" onClick={closeResponsMenu} style={() => getNavLinkStyle('/user/basket')}>{t('Your Basket')}</NavLink></li>
                                <li><NavLink to="/user/orders" onClick={closeResponsMenu} style={() => getNavLinkStyle('/user/orders')}>{t('Your Orders')}</NavLink></li>
                                <li><NavLink to="/user/checkout" onClick={closeResponsMenu} style={() => getNavLinkStyle('/user/checkout')}>{t('Checkout')}</NavLink></li>
                            </div>

                            ) : (
                                <></>
                            )}
                            <li><NavLink to="/about-us" onClick={closeResponsMenu} style={() => getNavLinkStyle('/about-us')}>{t('About us')}</NavLink></li>
                            <li><NavLink to="/how-it-works" onClick={closeResponsMenu} style={() => getNavLinkStyle('/how-it-works')}>{t('How it Works')}</NavLink></li>
                            <li><NavLink to="/faqs" onClick={closeResponsMenu} style={() => getNavLinkStyle('/faqs')}>{t('FAQs')}</NavLink></li>
                            {user ? (<li className={style.logout}> <NavLink to="/" onClick={handleLogout}>
                                {t('Logout')}
                            </NavLink></li>

                            ) : (
                                <></>
                            )}

                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ResponsNav;

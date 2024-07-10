import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './ResponsNav.module.css';
import closeMenuIcon from '../../../../assets/icons/Vector.svg';
import basket from '../../../../assets/icons/basketIcon.svg'

function ResponsNav() {
    const [isOpen, setIsOpen] = useState(true);

    function closeResponsMenu() {
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && (
                <div className={style.navbar}>
                    <img src={closeMenuIcon} alt="Close menu" onClick={closeResponsMenu} />
                    <div className={style.sign}>
                        <button className={style.signupBtn}>Sign up</button>
                        <div className={style.user}>
                            <img src={basket} alt="" />
                            <span>Sarkhan Rahimli</span>
                        </div>
                    </div>
                    <ul>
                        <li><NavLink to="/" activeClassName="active-link" onClick={closeResponsMenu}>Home</NavLink></li>
                        <li><NavLink to="/restaurants" onClick={closeResponsMenu}>Restaurants</NavLink></li>
                        <div>
                            <li><NavLink to="/user">Profile</NavLink></li>
                            <li><NavLink to="/user/basket">Your Basket</NavLink></li>
                            <li><NavLink to="/user/orders">Your Orders</NavLink></li>
                            <li><NavLink to="/user/checkout">Checkout</NavLink></li>
                        </div>
                        <li><NavLink to="/about-us" onClick={closeResponsMenu}>About us</NavLink></li>
                        <li><NavLink to="/how-it-works" onClick={closeResponsMenu}>How it works</NavLink></li>
                        <li><NavLink to="/faqs" onClick={closeResponsMenu}>FAQs</NavLink></li>
                        <li className={style.logout}>Logout</li>
                    </ul>

                </div>
            )}
        </>
    );
}

export default ResponsNav;

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import style from './ResponsNav.module.css';
import closeMenuIcon from '../../../../assets/icons/Vector.svg';
import basket from '../../../../assets/icons/basketIcon.svg';
import { useAuth } from '../../../../context/AuthContext';

function ResponsNav() {
    const { user } = useAuth();
    const navigate= useNavigate()
    const [isOpen, setIsOpen] = useState(true);

    const closeResponsMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && (
                <div className={style.navbarBg} onClick={closeResponsMenu}>
                    <div className={style.navbar}>
                        <img src={closeMenuIcon} alt="Close menu" onClick={closeResponsMenu} />
                        <div className={style.sign}>
                        {user ? (<div className={style.user}>
                                <img src={basket} alt="" />
                                <span>Sarkhan Rahimli</span>
                            </div>
        
      ) : (
        <button className={style.signupBtn} onClick={() => navigate('/login')}>Sign up</button>
      )}
                           
                        </div>
                        <ul>
                            <li><NavLink to="/" onClick={closeResponsMenu}>Home</NavLink></li>
                            <li><NavLink to="/restaurants" onClick={closeResponsMenu}>Restaurants</NavLink></li>
                            {user ? (<div>
                                <li><NavLink to="/user" onClick={closeResponsMenu}>Profile</NavLink></li>
                                <li><NavLink to="/user/basket" onClick={closeResponsMenu}>Your Basket</NavLink></li>
                                <li><NavLink to="/user/orders" onClick={closeResponsMenu}>Your Orders</NavLink></li>
                                <li><NavLink to="/user/checkout" onClick={closeResponsMenu}>Checkout</NavLink></li>
                            </div>
        
      ) : (
        <></>
      )}
                            <li><NavLink to="/about-us" onClick={closeResponsMenu}>About us</NavLink></li>
                            <li><NavLink to="/how-it-works" onClick={closeResponsMenu}>How it works</NavLink></li>
                            <li><NavLink to="/faqs" onClick={closeResponsMenu}>FAQs</NavLink></li>
                            {user ? ( <li className={style.logout}><NavLink to="/" onClick={closeResponsMenu}>Logout</NavLink></li>
        
      ) : (
        <></>
      )}
                           
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default ResponsNav;


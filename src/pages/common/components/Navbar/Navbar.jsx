import React from 'react';
import { NavLink } from 'react-router-dom';
import navLogo from '../../../../assets/icons/headerLogo.svg';
import engFlag from '../../../../assets/images/langEng.svg';
import navStyle from './Navbar.module.css'; // CSS modülünü import edin

function Navbar() {
  return (
    <div className={navStyle.navbar}>

      {/*     Foody Logo and Navigation Bar       */}
      <div className={navStyle.navigation}>
        <img src={navLogo} alt="" />
        <ul>
          <li><NavLink to="/" className={navStyle['nav-link']} >Home</NavLink></li>
          <li><NavLink to="/restaurants" className={navStyle['nav-link']} >Restaurants</NavLink></li>
          <li><NavLink to="/about" className={navStyle['nav-link']} >About us</NavLink></li>
          <li><NavLink to="/how-it-works" className={navStyle['nav-link']} >How it works</NavLink></li>
          <li><NavLink to="/faqs" className={navStyle['nav-link']}>FAQs</NavLink></li>
        </ul>
      </div>

      {/*      Search , profile, languages           */}

      <div className={navStyle.search}>
        <input type="text" placeholder='Search' />
        <img src={engFlag} alt="" />
        <button className={navStyle.signupBtn}>Sign up</button>
      </div>

    </div>
  );
}

export default Navbar;


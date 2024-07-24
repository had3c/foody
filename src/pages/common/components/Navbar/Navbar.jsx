import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext';
import navLogo from '../../../../assets/icons/headerLogo.svg';
import LanguageBox from '../LanguageBox/LanguageBox';
import navStyle from './Navbar.module.css';
import menuBar from '../../../../assets/icons/menuBar.svg'
import basket from '../../../../assets/icons/basketIcon.svg'
import SearchResult from '../SearchResult/SearchResult';
import UserMenu from '../DropDownMenu/UserMenu';
import ResponsNav from '../ResponsNav/ResponsNav';


function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [openMenu, setOpenMenu] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  function openResponsMenu() {
    setOpenMenu(!openMenu)
  }

  function dropDownMenu() {
    setDropDown(!dropDown)
  }

  return (
    <div className={navStyle.navbar}>
      {openMenu && <ResponsNav />}
      {/*     Foody Logo and Navigation Bar       */}
      <div className={navStyle.navigation}>
        <img src={navLogo} alt="" onClick={() => navigate('/')} />
        <img src={menuBar} alt="" className={navStyle.menuBar} onClick={openResponsMenu} />
        <ul>
          <li><NavLink className={navStyle.activeLink} to="/" >Home</NavLink></li>
          <li><NavLink to="/restaurants">Restaurants</NavLink></li>
          <li><NavLink to="/about-us">About us</NavLink></li>
          <li><NavLink to="/how-it-works">How it works</NavLink></li>
          <li><NavLink to="/faqs">FAQs</NavLink></li>
        </ul>
      </div>

      {/*      Search , profile, languages           */}

      <div className={navStyle.search}>
        <input type="text" placeholder='Search' />
        <SearchResult />
        <div className={navStyle.language}>
          <LanguageBox />
        </div>

        {user ? (
          <div className={navStyle.userTrue}>
            <img src={basket} alt="" onClick={() => navigate('/user/basket')} />
            <img src={basket} alt="" onClick={dropDownMenu} />
            {dropDown && <UserMenu />}
          </div>
        ) : (
          <button className={navStyle.signupBtn} onClick={() => navigate('/login')}>Sign up</button>
        )}
      </div>

    </div>
  );
}

export default Navbar;
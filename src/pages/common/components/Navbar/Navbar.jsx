import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../../context/AuthContext';
import navLogo from '../../../../assets/icons/headerLogo.svg';
import LanguageBox from '../LanguageBox/LanguageBox';
import navStyle from './Navbar.module.css';
import menuBar from '../../../../assets/icons/menuBar.svg';
import basket from '../../../../assets/icons/basketIcon.svg';
import avatar from '../../../../assets/icons/avatar.svg';
import SearchResult from '../SearchResult/SearchResult';
import UserMenu from '../DropDownMenu/UserMenu';
import ResponsNav from '../ResponsNav/ResponsNav';
import useDebounce from '../../../../hooks/useDebounce';
import { useProfile } from '../../../../context/ProfileContext';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { t } = useTranslation();
  const { profileImage, setProfileImage } = useProfile();
  const [openMenu, setOpenMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [searchResult, setSearchResult] = useState('');
  const debouncedSearch = useDebounce(searchResult, 200);

  function openResponsMenu() {
    setOpenMenu(!openMenu);
  }

  function dropDownMenu() {
    setDropDown(!dropDown);
  }

  const getNavLinkStyle = (path) => {
    return {
      color: location.pathname === path || (location.pathname === '/' && path === '/') ? '#d63626' : '#828282',
    };
  };

  return (
    <div className={navStyle.navbar}>
      {openMenu && <ResponsNav setOpenMenu={setOpenMenu} openMenu={openMenu} />}
      {/*     Foody Logo and Navigation Bar       */}
      <div className={navStyle.navigation}>
        <img src={navLogo} alt="" onClick={() => navigate('/')} />
        <img src={menuBar} alt="" className={navStyle.menuBar} onClick={openResponsMenu} />
        <ul>
          <li><NavLink to="/" style={() => getNavLinkStyle('/')}>{t('Home')}</NavLink></li>
          <li><NavLink to="/restaurants" style={() => getNavLinkStyle('/restaurants')}>{t('Restaurants')}</NavLink></li>
          <li><NavLink to="/about-us" style={() => getNavLinkStyle('/about-us')}>{t('About us')}</NavLink></li>
          <li><NavLink to="/how-it-works" style={() => getNavLinkStyle('/how-it-works')}>{t('How it Works')}</NavLink></li>
          <li><NavLink to="/faqs" style={() => getNavLinkStyle('/faqs')}>{t('FAQs')}</NavLink></li>
        </ul>
      </div>

      {/*      Search , profile, languages           */}
      <div className={navStyle.search}>
        <input
          type="text"
          placeholder={t('Search')}
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
        />
        {searchResult && (
          <div className={navStyle.searchResult}>
            <SearchResult debouncedSearch={debouncedSearch} />
          </div>
        )}

        <div className={navStyle.language}>
          <LanguageBox />
          {user ? (
            <div className={navStyle.userTrue}>
              <img src={basket} alt="" onClick={() => navigate('/user/basket')} />
              <img src={profileImage || avatar} alt="" onClick={dropDownMenu} className={navStyle.userImg} />
              {dropDown && <UserMenu setDropDown={setDropDown} />}
            </div>
          ) : (
            <button className={navStyle.signupBtn} onClick={() => navigate('/login')}>{t('Sign Up')}</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

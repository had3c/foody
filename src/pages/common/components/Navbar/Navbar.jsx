import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useOnClickOutside from 'react-cool-onclickoutside';
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
import axios from 'axios'

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { t } = useTranslation();
  const [profilePicture, setProfilePicture] = useState(avatar)
  const [fullName, setFullName] = useState('');
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
  
  const ref = useOnClickOutside(() => {
    if (dropDown) {
      setDropDown(false);
    }
  });

  const getNavLinkStyle = (path) => {
    return {
      color: location.pathname === path || (location.pathname === '/' && path === '/') ? '#d63626' : '#828282',
    };
  };
  const fetchUserData = async () => {
    if (!user) return;
    const url = `https://firestore.googleapis.com/v1/projects/foody-b6c94/databases/(default)/documents/users/${user.userId}`;
    try {
      const response = await axios.get(url);
      const userData = response.data.fields;  
      setFullName(userData.fullName.stringValue);
      const image = userData.imageURL?.stringValue || avatar;
      setProfilePicture(image);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [user]);


  return (
    <div className={navStyle.navbar}>
      {openMenu && <ResponsNav setOpenMenu={setOpenMenu} openMenu={openMenu}  profilePicture={profilePicture} 
  fullName={fullName}/>}
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
            <SearchResult debouncedSearch={debouncedSearch} setSearchResult={setSearchResult}/>
          </div>
        )}

        <div className={navStyle.language}>
          <LanguageBox />
          {user ? (
            <div className={navStyle.userTrue}>
              <img src={basket} alt="" onClick={() => navigate('/user/basket')} />
              <img src={profilePicture} alt="" onClick={dropDownMenu} className={navStyle.userImg} />
              {dropDown && <UserMenu ref={ref} setDropDown={setDropDown} fullName={fullName}/>}
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

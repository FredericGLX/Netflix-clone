import { useState, useContext } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';
import logo from './img/netflix_logo.png';
import avatar from './img/netflix-avatar.png';
import SearchBar from '../SearchBar/SearchBar';
import { AiOutlineCaretDown } from 'react-icons/ai';
import useScroll from '../../hooks/useScroll';
import useClickOutside from '../../hooks/useClickOutside';
import { SearchContext } from '../contexts/SearchContext';
import useWindowSize from '../../hooks/useWindowSize';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const windowSize = useWindowSize();
  const isScrolled = useScroll(150);
  const isMenuScrolled = useScroll(10);
  const [isAvatarClicked, setIsAvatarClicked] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { searchHandler, query } = useContext(SearchContext);
  const { pathname } = useLocation();

  const handleClickNavigation = (route) => {
    searchHandler('');
    navigate(route);
  };

  const menuLinks = (
    <>
      {windowSize.width >= 650 ? (
        <p
          onClick={() => handleClickNavigation('/homepage')}
          className={
            pathname === '/homepage' && query === '' ? 'active-link' : ''
          }
        >
          Home
        </p>
      ) : (
        ''
      )}
      <p
        onClick={() => handleClickNavigation('/tvshows')}
        className={pathname === '/tvshows' && query === '' ? 'active-link' : ''}
      >
        TV Shows
      </p>
      <p
        onClick={() => handleClickNavigation('/movies')}
        className={pathname === '/movies' && query === '' ? 'active-link' : ''}
      >
        Movies
      </p>
      <p
        onClick={() => handleClickNavigation('/mylist')}
        className={pathname === '/mylist' && query === '' ? 'active-link' : ''}
      >
        My List
      </p>
    </>
  );

  const handleAvatarClick = () => {
    if (isAvatarClicked === false) {
      setIsAvatarClicked(true);
    } else {
      setIsAvatarClicked(false);
    }
  };

  let domNode = useClickOutside(() => {
    setIsAvatarClicked(false);
  });

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    navigate('/');
  };

  return (
    <nav className={`navbar-container ${isScrolled ? 'navbar-active' : ''}`}>
      <div className="navbar-left">
        <img
          className="navbar-logo"
          src={logo}
          alt="netflix-logo"
          onClick={() => handleClickNavigation('/homepage')}
        />
        {windowSize.width >= 650 ? (
          <div className="navbar-links">{menuLinks}</div>
        ) : (
          ''
        )}
      </div>

      <div className="navbar-right" ref={domNode}>
        <SearchBar />
        <div className="profile-section" onClick={handleAvatarClick}>
          <img className="navbar-avatar" src={avatar} alt="avatar logo" />
          <AiOutlineCaretDown
            className={`navbar-caret${isAvatarClicked ? 'active' : 'inactive'}`}
            size="1.4rem"
            color="#fff"
          />
          <div
            className={`profile-logout ${isAvatarClicked && 'show'}`}
            onClick={handleLogout}
          >
            Sign out
          </div>
        </div>
      </div>
      {windowSize.width < 650 ? (
        <div
          className={`navbar-browse ${
            isMenuScrolled && 'navbar-browse-disabled'
          }`}
        >
          {menuLinks}
        </div>
      ) : (
        ''
      )}
    </nav>
  );
};

export default Navbar;

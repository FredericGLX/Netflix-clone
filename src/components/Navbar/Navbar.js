import { useState, useContext } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.scss';
import logo from './img/netflix_logo.png';
import avatar from './img/netflix-avatar.png';
import SearchBar from '../SearchBar/SearchBar';
import { AiOutlineCaretDown } from 'react-icons/ai';
import useScroll from '../../hooks/useScroll';
import useClickOutside from '../../hooks/useClickOutside';
import { SearchContext } from '../contexts/SearchContext';

const Navbar = () => {
  const isScrolled = useScroll(500);
  const isMenuScrolled = useScroll(10);
  const [isAvatarClicked, setIsAvatarClicked] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { searchHandler } = useContext(SearchContext);

  const handleClickNavigation = (route) => {
    searchHandler('');
    navigate(route);
  };

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
    <div className={`navbar-container ${isScrolled && 'navbar-active'}`}>
      <img
        className="navbar-logo"
        src={logo}
        alt="netflix-logo"
        onClick={() => handleClickNavigation('/homepage')}
      />

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
      <div
        className={`navbar-browse ${
          isMenuScrolled && 'navbar-browse-disabled'
        }`}
      >
        <a onClick={() => handleClickNavigation('/tvshows')}>TV Shows</a>
        <a onClick={() => handleClickNavigation('/movies')}>Movies</a>
        <a onClick={() => handleClickNavigation('/mylist')}>My List</a>
      </div>
    </div>
  );
};

export default Navbar;

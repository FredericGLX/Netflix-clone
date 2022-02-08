import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';
import logo from './img/netflix_logo.png';
import avatar from './img/netflix-avatar.png';
import SearchBar from '../SearchBar/SearchBar';
import { AiOutlineCaretDown } from 'react-icons/ai';
import useScroll from '../../hooks/useScroll';

const Navbar = () => {
  const isScrolled = useScroll(580);
  const [isAvatarClicked, setIsAvatarClicked] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    if (isAvatarClicked === false) {
      setIsAvatarClicked(true);
    } else {
      setIsAvatarClicked(false);
    }
  };

  const handleClickLogo = () => {
    window.location.reload();
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    navigate('/');
  };

  return (
    <div className="test">
      <div className={`navbar-container ${isScrolled && 'navbar-active'}`}>
        <img
          className="navbar-logo"
          src={logo}
          alt="netflix-logo"
          onClick={handleClickLogo}
        />
        <div className="navbar-right">
          <SearchBar />
          <div className="profile-section" onClick={handleAvatarClick}>
            <img className="navbar-avatar" src={avatar} alt="avatar logo" />
            <AiOutlineCaretDown
              className={`navbar-caret${
                isAvatarClicked ? 'active' : 'inactive'
              }`}
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
      </div>
    </div>
  );
};

export default Navbar;

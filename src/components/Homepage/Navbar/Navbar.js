import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import './Navbar.scss';
import logo from './img/netflix_logo.png';
import avatar from './img/netflix-avatar.png';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCaretDown } from 'react-icons/ai';
import useScroll from '../../hooks/useScroll';

const Navbar = () => {
  const isScrolled = useScroll(580);
  const [isAvatarClicked, setIsAvatarClicked] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAvatarClicked === false) {
      setIsAvatarClicked(true);
    } else {
      setIsAvatarClicked(false);
    }
  };

  async function handleLogout(e) {
    e.preventDefault();

    await logout();
    navigate('/');
  }

  return (
    <div className="test">
      <div className={`navbar-container ${isScrolled && 'navbar-active'}`}>
        <img className="navbar-logo" src={logo} alt="netflix-logo" />
        <div className="navbar-right">
          <BiSearch className="search-icon" size="2.5rem" color="#fff" />

          <div className="profile-section" onClick={handleClick}>
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

import logo from '../img/netflix_logo.png';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-main-container">
      <header className="header">
        <Link to="/">
          <img className="header-logo" src={logo} alt="netflix logo" />
        </Link>
        <Link to="/login">
          <button className="btn-sign-in">Sign in</button>
        </Link>
      </header>
      <div className="header-text-container">
        <div className="header-titles">
          <h1>
            Unlimited movies, TV <br></br>shows and more.
          </h1>
          <p>Watch anywhere. Cancel at any time.</p>
        </div>
        <div className="cta-form-container">
          <p>
            Ready to watch Netflix? Enter your email to create or restart your
            membership.
          </p>
          <Link to={'/signup'}>
            <button className="btn-get-started">Get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

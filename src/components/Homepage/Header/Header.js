import logo from '../img/netflix_logo.png';
import './Header.scss';

const Header = () => {
  return (
    <div className="header-main-container">
      <header className="header">
        <img className="logo" src={logo} alt="netflix logo" />
        <button className="btn-sign-in">Sign in</button>
      </header>
      <div className="header-text-container">
        <div className="header-titles">
          <h1>
            Unlimited movies, TV <br></br>shows and more.
          </h1>
          <p>Watch anywhere. Cancel at any time.</p>
        </div>
        <div className="cta-form-container">
          <div>
            <p>
              Ready to watch Netflix? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="email-form">
            <div className="field">
              <input
                type="email"
                name="email"
                autocomplete="email"
                maxLength="50"
                minLength="5"
              />
              <label
                className="label-text"
                for="email"
                title="Email address"
              ></label>
            </div>
            <button className="btn-get-started">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

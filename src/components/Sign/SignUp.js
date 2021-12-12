import './Sign.scss';
import logo from './img/netflix_logo.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="sign-page-container">
      <Link to="/">
        <img className="logo" src={logo} alt="netflix logo" />
      </Link>
      <div className="sign-container">
        <div className="sign-title">
          <h1>Sign Up</h1>
        </div>
        <div className="sign-form">
          <div className="sign-field">
            <input type="text" required />
            <label
              className="sign-label-text"
              for="text"
              title="Your name"
            ></label>
          </div>

          <div className="sign-field">
            <input type="text" required />
            <label className="sign-label-text" for="text" title="Email"></label>
          </div>

          <div className="sign-field">
            <input type="password" required />
            <label className="sign-label-text" title="Password"></label>
          </div>

          <div className="sign-field">
            <input type="password" required />
            <label
              className="sign-label-text"
              title="Repeat your password"
            ></label>
          </div>

          <button className="sign-btn-sign-in">Sign In</button>
        </div>
        <div className="sign-signup-now">
          <p>
            Do you already have an account?{' '}
            <Link to="/login" className="sign-in-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

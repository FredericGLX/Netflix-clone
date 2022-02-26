import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import logo from './img/netflix_logo.png';
import './Sign.scss';
import useMounted from '../../hooks/useMounted';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();
  const mounted = useMounted();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }

    try {
      setError('');
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      navigate('/homepage');
    } catch {
      setError('Failed to create an account');
    }
    mounted.current && setLoading(false);
  }

  return (
    <div className="sign-page-container">
      <Link to="/">
        <img className="logo" src={logo} alt="netflix logo" />
      </Link>
      <div className="sign-container">
        <div className="sign-title">
          <h1>Sign Up</h1>
        </div>

        <form className="sign-form" onSubmit={handleSubmit}>
          {error && alert(error)}
          <div className="sign-field">
            <input type="text" ref={emailRef} required />
            <label className="sign-label-text" title="Email"></label>
          </div>
          <div className="sign-field">
            <input type="password" ref={passwordRef} required />
            <label className="sign-label-text" title="Password"></label>
          </div>
          <div className="sign-field">
            <input type="password" ref={passwordConfirmRef} required />
            <label
              className="sign-label-text"
              title="Repeat your password"
            ></label>
          </div>
          <button disabled={loading} className="sign-btn-sign-in" type="submit">
            Sign In
          </button>
        </form>

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

import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Sign.scss';
import logo from './img/netflix_logo.png';
import useMounted from '../hooks/useMounted';

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, signInWithGoogle } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const mounted = useMounted();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/homepage');
    } catch {
      setError('Failed to sign in');
    }
    mounted.current && setLoading(false);
  }

  async function loginWithGoogle() {
    try {
      await signInWithGoogle();
      navigate('/homepage');
    } catch {
      setError('Failed to sign in with Google account');
    }
  }

  return (
    <div className="sign-page-container">
      <Link to="/">
        <img className="logo" src={logo} alt="netflix logo" />
      </Link>
      <div className="sign-container">
        <div className="sign-title">
          <h1>Sign In</h1>
        </div>

        <form className="sign-form" onSubmit={handleSubmit}>
          {error && alert(error)}
          <div className="sign-field">
            <input type="text" ref={emailRef} autoComplete="email" required />
            <label
              className="sign-label-text"
              for="text"
              title="Email or phone number"
            ></label>
          </div>

          <div className="sign-field">
            <input type="password" ref={passwordRef} required />
            <label className="sign-label-text" title="Password"></label>
          </div>

          <button disabled={loading} className="sign-btn-sign-in" type="submit">
            Sign In
          </button>
          <button className="sign-btn-sign-in" onClick={loginWithGoogle}>
            Sign In with Google
          </button>
        </form>
        <div className="sign-signup-now">
          <p>
            New to Netflix?{' '}
            <Link to="/signup" className="sign-up-link">
              Sign up now.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

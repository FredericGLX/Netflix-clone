import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();

    await logout();
    navigate('/');
  }

  return (
    <div>
      <h1>HOMEPAGE</h1>
      <button onClick={handleLogout} className="btn-get-started">
        Sign out
      </button>
    </div>
  );
};

export default Homepage;

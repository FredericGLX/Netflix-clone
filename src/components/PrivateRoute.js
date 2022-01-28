import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}

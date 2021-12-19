import { Navigate, Outlet, useLocation, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

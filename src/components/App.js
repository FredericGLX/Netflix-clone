import LandingPage from './Landing_Page/LandingPage';
import SignIn from './Sign/SignIn';
import SignUp from './Sign/SignUp';
import Homepage from './Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import TvShowsPage from './TvShowsPage/TvShowsPage';
import MoviesPage from './MoviesPage/MoviesPage';
import MyListPage from './MyListPage/MyListPage';

function App() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route path="/" element={!currentUser ? <LandingPage /> : <Homepage />} />
      <Route
        path="/signup"
        element={!currentUser ? <SignUp /> : <Homepage />}
      />
      <Route path="/login" element={!currentUser ? <SignIn /> : <Homepage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/tvshows" element={<TvShowsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/mylist" element={<MyListPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import LandingPage from './Landing_Page/LandingPage';
import SignIn from './Sign/SignIn';
import SignUp from './Sign/SignUp';
import Homepage from './Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import Test from './Homepage/Test';

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
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
}

export default App;

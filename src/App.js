import LandingPage from './components/Landing_Page/LandingPage';
import SignIn from './components/Sign/SignIn';
import SignUp from './components/Sign/SignUp';
import Homepage from './components/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

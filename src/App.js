import LandingPage from './components/Landing_Page/LandingPage';
import SignIn from './components/Sign/SignIn';
import SignUp from './components/Sign/SignUp';
import Homepage from './components/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;

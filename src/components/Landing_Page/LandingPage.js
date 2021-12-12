import Header from './Header/Header';
import Features from './Features/Features';
import Faq from './Faq/Faq';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Header />
      <Features />
      <Faq />
    </div>
  );
};

export default LandingPage;

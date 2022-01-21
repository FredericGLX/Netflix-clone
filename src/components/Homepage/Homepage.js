import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Rows from './Rows/Rows';
import { ContentProvider } from '../contexts/ContentContext';

const Homepage = () => {
  return (
    <ContentProvider>
      <div className="homepage-container">
        <Navbar />
        <Banner />
        <Rows />
      </div>
    </ContentProvider>
  );
};

export default Homepage;

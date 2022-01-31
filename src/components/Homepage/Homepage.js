import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Rows from '../Rows/Rows';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <Banner />
      <Rows />
    </div>
  );
};

export default Homepage;

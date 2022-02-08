import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Rows from '../Rows/Rows';
import { SearchContext } from '../contexts/SearchContext';
import Search from '../Search/Search';

const Homepage = () => {
  const { query } = useContext(SearchContext);

  return (
    <div className="homepage-container">
      <Navbar />
      {query === '' ? (
        <>
          <Banner />
          <Rows />
        </>
      ) : (
        <Search />
      )}
    </div>
  );
};

export default Homepage;

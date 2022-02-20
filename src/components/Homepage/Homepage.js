import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import RowsMovies from '../Rows/RowsMovies';
import { SearchContext } from '../contexts/SearchContext';
import { ContentContext } from '../contexts/ContentContext';
import Search from '../Search/Search';

const Homepage = () => {
  const { query } = useContext(SearchContext);
  const { trendingNowData } = useContext(ContentContext);

  return (
    <div className="homepage-container">
      <Navbar />
      {query === '' ? (
        <>
          <Banner content={trendingNowData} />
          <RowsMovies />
        </>
      ) : (
        <Search />
      )}
    </div>
  );
};

export default Homepage;

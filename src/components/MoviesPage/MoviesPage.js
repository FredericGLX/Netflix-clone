import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import RowsMovies from '../Rows/RowsMovies';
import { SearchContext } from '../contexts/SearchContext';
import { ContentContext } from '../contexts/ContentContext';
import Search from '../Search/Search';

const MoviesPage = () => {
  const { query } = useContext(SearchContext);
  const { trendingMovies } = useContext(ContentContext);

  return (
    <div className="homepage-container">
      <Navbar />
      {query === '' ? (
        <>
          <Banner content={trendingMovies} />
          <RowsMovies />
        </>
      ) : (
        <Search />
      )}
    </div>
  );
};

export default MoviesPage;

import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { ContentContext } from '../contexts/ContentContext';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import Banner from '../Banner/Banner';
import RowsTvShows from '../Rows/RowsTvShows';

const TvShowsPage = () => {
  const { query } = useContext(SearchContext);
  const { trendingTvShows } = useContext(ContentContext);

  return (
    <div className="homepage-container">
      <Navbar />
      {query === '' ? (
        <>
          <Banner content={trendingTvShows} />
          <RowsTvShows />
        </>
      ) : (
        <Search />
      )}
    </div>
  );
};

export default TvShowsPage;

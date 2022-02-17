import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import RowsTvShows from '../Rows/RowsTvShows';
import { SearchContext } from '../contexts/SearchContext';
import { ContentContext } from '../contexts/ContentContext';
import Search from '../Search/Search';

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

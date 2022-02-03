import Movie from './Movie';
import { useContentData } from '../contexts/ContentContext';

const Rows = () => {
  const {
    comedyData,
    popularData,
    trendingNowData,
    horrorData,
    scifiData,
    animationData,
  } = useContentData();

  return (
    <div className="row-container">
      <Movie movies={popularData} rowTitle={'Popular on Netflix'} />
      <Movie movies={comedyData} rowTitle={'Comedy'} />
      <Movie movies={scifiData} rowTitle={'Sci-Fi'} />
      <Movie movies={trendingNowData} rowTitle={'Trending Now'} />
      <Movie movies={animationData} rowTitle={'Animation'} />
      <Movie movies={horrorData} rowTitle={'Horror'} />
    </div>
  );
};

export default Rows;

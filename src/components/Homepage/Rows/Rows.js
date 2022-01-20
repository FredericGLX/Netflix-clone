import Movie from './Movie';
import { useContentData } from '../../contexts/ContentContext';

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
      {Movie(popularData, 'Popular on Netflix')}
      {Movie(comedyData, 'Comedy')}
      {Movie(trendingNowData, 'Trending Now')}
      {Movie(animationData, 'Animation')}
      {Movie(scifiData, 'Science-Fiction')}
      {Movie(horrorData, 'Horror')}
    </div>
  );
};

export default Rows;

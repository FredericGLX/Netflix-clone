import Movie from '../Movie/Movie';
import { ContentContext } from '../contexts/ContentContext';
import { motion } from 'framer-motion';
import { movieFade } from '../helper/motionHelper';
import { useContext } from 'react';

const RowsTvShows = () => {
  const {
    // popularData,
    tvShowsComedyData,
    trendingTvShows,
    tvShowsMysteryData,
    tvShowsMusicData,
    tvShowsAnimationData,
    tvShowsCrimeData,
  } = useContext(ContentContext);

  return (
    <motion.div
      className="row-container"
      variants={movieFade}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Movie movies={tvShowsComedyData} rowTitle={'Comedy'} />
      <Movie movies={tvShowsAnimationData} rowTitle={'Animation'} />
      <Movie
        movies={trendingTvShows}
        rowTitle={'Trending Now'}
        isVertical={true}
      />
      <Movie movies={tvShowsCrimeData} rowTitle={'Crime'} />
      <Movie movies={tvShowsMysteryData} rowTitle={'Mystery'} />
      <Movie movies={tvShowsMusicData} rowTitle={'Music'} />
    </motion.div>
  );
};

export default RowsTvShows;

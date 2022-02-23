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
      {/* <Movie movies={popularData} rowTitle={'Popular on Netflix'} /> */}
      <Movie movies={tvShowsComedyData} rowTitle={'Comedy'} />
      <Movie movies={trendingTvShows} rowTitle={'Trending Now'} />
      <Movie movies={tvShowsCrimeData} rowTitle={'Crime'} />
      <Movie movies={tvShowsAnimationData} rowTitle={'Animation'} />
      <Movie movies={tvShowsMysteryData} rowTitle={'Mystery'} />
      <Movie movies={tvShowsMusicData} rowTitle={'Music'} />
    </motion.div>
  );
};

export default RowsTvShows;

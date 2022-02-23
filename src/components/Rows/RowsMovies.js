import Movie from '../Movie/Movie';
import { ContentContext } from '../contexts/ContentContext';
import { motion } from 'framer-motion';
import { movieFade } from '../helper/motionHelper';
import { useContext } from 'react';

const RowsMovies = () => {
  const {
    trendingNowData,
    moviesPopularData,
    moviesComedyData,
    moviesHorrorData,
    moviesAnimationData,
  } = useContext(ContentContext);

  return (
    <motion.div
      className="row-container"
      variants={movieFade}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Movie movies={moviesPopularData} rowTitle={'Popular on Netflix'} />
      <Movie movies={moviesComedyData} rowTitle={'Comedy'} />
      <Movie movies={trendingNowData} rowTitle={'Trending Now'} />
      <Movie movies={moviesAnimationData} rowTitle={'Animation'} />
      <Movie movies={moviesHorrorData} rowTitle={'Horror'} />
    </motion.div>
  );
};

export default RowsMovies;

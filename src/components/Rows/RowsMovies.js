import { useContext } from 'react';
import { ContentContext } from '../contexts/ContentContext';
import Movie from '../Movie/Movie';
import { motion } from 'framer-motion';
import { movieFade } from '../helper/motionHelper';

const RowsMovies = () => {
  const {
    trendingNowData,
    moviesPopularData,
    moviesComedyData,
    moviesHorrorData,
    moviesAnimationData,
    moviesDocumentaryData,
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
      <Movie
        movies={trendingNowData}
        rowTitle={'Trending Now'}
        isVertical={true}
      />
      <Movie movies={moviesAnimationData} rowTitle={'Animation'} />
      <Movie movies={moviesDocumentaryData} rowTitle={'Documentaries'} />
      <Movie movies={moviesHorrorData} rowTitle={'Horror'} />
    </motion.div>
  );
};

export default RowsMovies;

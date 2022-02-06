import Movie from './Movie';
import { useContentData } from '../contexts/ContentContext';
import { motion } from 'framer-motion';
import { movieFade } from '../helper/motionHelper';

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
    <motion.div
      className="row-container"
      variants={movieFade}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Movie movies={popularData} rowTitle={'Popular on Netflix'} />
      <Movie movies={comedyData} rowTitle={'Comedy'} />
      <Movie movies={scifiData} rowTitle={'Sci-Fi'} />
      <Movie movies={trendingNowData} rowTitle={'Trending Now'} />
      <Movie movies={animationData} rowTitle={'Animation'} />
      <Movie movies={horrorData} rowTitle={'Horror'} />
    </motion.div>
  );
};

export default Rows;

import './Banner.scss';
import { image_url } from '../helper/helper';
import { useContentData } from '../contexts/ContentContext';
import { getRandomNumber, reduceText } from '../helper/helper';
import { BsPlayFill } from 'react-icons/bs';
import ModalBtn from '../Modal/ModalBtn';
import { BiInfoCircle } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { bannerFade, bannerTitle, bannerCaption } from '../helper/motionHelper';

const Banner = () => {
  const { trendingNowData } = useContentData();
  const num = getRandomNumber();

  return (
    trendingNowData.length > 0 && (
      <motion.div
        className="banner-container"
        variants={bannerFade}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="banner-top-fade"></div>
        <img
          className="banner-image"
          src={image_url + trendingNowData[num].poster_path}
          alt="main trending movie"
        />
        <motion.div className="banner-content">
          <motion.h1
            className="banner-title"
            variants={bannerFade}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {trendingNowData[num].title}
          </motion.h1>

          <motion.div
            className="banner-buttons"
            variants={bannerTitle}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button className="banner-play-btn">
              <BsPlayFill size="2rem" className="btn-logo" />
              Play
            </button>

            <ModalBtn
              image={trendingNowData[num].backdrop_path}
              title={trendingNowData[num].title}
              description={trendingNowData[num].overview}
              genres={trendingNowData[num].genre_ids}
              language={trendingNowData[num].original_language}
              date={trendingNowData[num].release_date}
              vote={trendingNowData[num].vote_average}
            >
              <button className="banner-info-btn">
                <BiInfoCircle size="2rem" className="btn-logo" />
                More info
              </button>
            </ModalBtn>
          </motion.div>
          <motion.p
            className="banner-content-description"
            variants={bannerCaption}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {reduceText(trendingNowData[num].overview, 150)}
          </motion.p>
        </motion.div>
        <div className="banner-bottom-fade"></div>
      </motion.div>
    )
  );
};

export default Banner;

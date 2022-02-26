import './Banner.scss';
import { image_url } from '../helper/requests';
import { getRandomNumber, reduceText } from '../helper/helper';
import { BsPlayFill } from 'react-icons/bs';
import { BiInfoCircle } from 'react-icons/bi';
import ModalBtn from '../Modal/ModalBtn';
import { motion } from 'framer-motion';
import { bannerFade, bannerTitle, bannerCaption } from '../helper/motionHelper';

const Banner = ({ content }) => {
  const num = getRandomNumber();

  return (
    content.length > 0 && (
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
          src={image_url + content[num].backdrop_path}
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
            {content[num].title || content[num].name}
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
              image={content[num].backdrop_path}
              title={content[num].title || content[num].name}
              description={content[num].overview}
              genres={content[num].genre_ids}
              language={content[num].original_language}
              date={content[num].release_date}
              vote={content[num].vote_average}
              objectData={content[num]}
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
            {reduceText(content[num].overview, 150)}
          </motion.p>
        </motion.div>
        <div className="banner-bottom-fade"></div>
      </motion.div>
    )
  );
};

export default Banner;

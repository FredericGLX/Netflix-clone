import './Banner.scss';
import { image_url } from '../../helper/helper';
import { useContentData } from '../../contexts/ContentContext';
import { getRandomNumber, reduceText } from '../../helper/helper';
import { BsPlayFill } from 'react-icons/bs';
import ModalBtn from '../../Modal/ModalBtn';
import { BiInfoCircle } from 'react-icons/bi';

const Banner = () => {
  const { trendingNowData } = useContentData();
  const num = getRandomNumber();

  return (
    trendingNowData.length > 0 &&
    trendingNowData[num].title !== undefined && (
      <div className="banner-container">
        <img
          className="banner-image"
          src={image_url + trendingNowData[num].poster_path}
          alt="main trending movie"
        />
        <div className="banner-content">
          <h1 className="banner-title">{trendingNowData[num].title}</h1>

          <div className="banner-buttons">
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
          </div>
          <p className="banner-content-description">
            {reduceText(trendingNowData[num].overview, 150)}
          </p>
        </div>
        <div className="banner-bottom-fade"></div>
      </div>
    )
  );
};

export default Banner;

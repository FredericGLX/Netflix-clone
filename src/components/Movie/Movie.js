import { image_url } from '../helper/requests';
import './Movie.scss';
import '../Modal/ModalBtn';
import PosterInfo from '../PosterInfo/PosterInfo';

// Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import ModalBtn from '../Modal/ModalBtn';

const Movie = (props) => {
  const slides = [];

  const customBreakpoints = {
    breakpoints: {
      1350: {
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
      990: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      650: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      350: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      200: {
        slidesPerView: 1.5,
      },
    },
  };

  const getEdgeArrowsIndex = (index) => {
    const i = index + 1;
    if (i === 1) return 'disabled-arrow';
    else if (i === 20) return 'disabled-arrow';
  };

  props.movies.length > 0 &&
    props.movies.map((item, index) => {
      return slides.push(
        <SwiperSlide key={`slide-${index}`}>
          <ModalBtn
            image={item.backdrop_path}
            title={item.title || item.name}
            description={item.overview}
            genres={item.genre_ids}
            language={item.original_language}
            date={item.release_date}
            vote={item.vote_average}
            objectData={item}
          >
            <img
              className="slide-img"
              src={
                item.backdrop_path.length > 0 && image_url + item.backdrop_path
              }
              alt={item.title}
            />
            <PosterInfo
              title={item.title || item.name}
              genres={item.genre_ids}
            />
          </ModalBtn>
        </SwiperSlide>
      );
    });

  return (
    <div className="rows-individual">
      <div className={`title-pagination `}>
        <h1>{props.rowTitle}</h1>
        <Swiper
          navigation
          pagination={{ clickable: true, el: '.custom-pagination-div' }}
          spaceBetween={5}
          {...customBreakpoints}
          modules={[Navigation, Pagination]}
        >
          {slides}
          <span className="custom-pagination-div"></span>
        </Swiper>
      </div>
    </div>
  );
};

export default Movie;

import { image_url } from '../helper/requests';
import { useEffect } from 'react';
import './Rows.scss';
import '../Modal/ModalBtn';
import { genres as listGenres } from '../helper/list_genres';

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
      1366: {
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
      998: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
      650: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      500: {
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

  props.movies.length > 0 &&
    props.movies.map((item, index) => {
      return slides.push(
        <SwiperSlide className="swiper-slide" key={`slide-${index}`}>
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
          </ModalBtn>
        </SwiperSlide>
      );
    });

  return (
    <div className="rows-individual">
      <div className="title-pagination">
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

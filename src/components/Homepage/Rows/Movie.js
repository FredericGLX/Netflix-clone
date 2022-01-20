import { image_url } from '../../helper/helper';
import './Rows.scss';

// Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

const Movie = (movies, title) => {
  const slides = [];

  const customSwiperParameters = {
    observer: true,
    observeParents: true,
    pagination: {
      el: '.custom-pagination-div',
      clickable: true,
    },
    navigation: true,
  };

  movies.length > 0 &&
    movies.map((item, index) => {
      slides.push(
        <SwiperSlide className="swiper-slide" key={`slide-${index}`}>
          <img
            className="slide-img"
            src={
              item.backdrop_path.length > 0 && image_url + item.backdrop_path
            }
            alt={item.title}
          />
        </SwiperSlide>
      );
    });

  return (
    <div className="rows-individual">
      <div className="title-pagination">
        <h1>{title}</h1>
        <span className="custom-pagination-div"></span>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        {...customSwiperParameters}
        spaceBetween={0}
        slidesPerView={6}
        slidesPerGroup={2}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default Movie;

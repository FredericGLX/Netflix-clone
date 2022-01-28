import { image_url, capitalizeFirstLetter } from '../../helper/helper';
import './Rows.scss';
import '../../Modal/ModalBtn';
import { BsPlayCircleFill } from 'react-icons/bs';

// Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import ModalBtn from '../../Modal/ModalBtn';

const Movie = (movies, rowTitle) => {
  const slides = [];

  movies.length > 0 &&
    movies.map((item, index) => {
      return slides.push(
        <SwiperSlide className="swiper-slide" key={`slide-${index}`}>
          <ModalBtn
            image={item.backdrop_path}
            title={item.title}
            description={item.overview}
            genres={item.genre_ids}
            language={item.original_language}
            date={item.release_date}
            vote={item.vote_average}
          >
            <img
              className="slide-img"
              src={
                item.backdrop_path.length > 0 && image_url + item.backdrop_path
              }
              alt={item.title}
            />
            {/* <div className="hover-icons">
              <BsPlayCircleFill size="2rem" />
              <span>{item.title}</span>
            </div> */}
          </ModalBtn>
        </SwiperSlide>
      );
    });

  return (
    <div className="rows-individual">
      <div className="title-pagination">
        <h1>{rowTitle}</h1>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={2}
          slidesPerGroup={2}
          navigation
          pagination={{ clickable: true, el: '.custom-pagination-div' }}
        >
          {slides}
          <span className="custom-pagination-div"></span>
        </Swiper>
      </div>
    </div>
  );
};

export default Movie;

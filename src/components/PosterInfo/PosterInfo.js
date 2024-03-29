import './PosterInfo.scss';
import { IoIosPlayCircle } from 'react-icons/io';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { genres as listGenres } from '../helper/list_genres';
import { capitalizeFirstLetter } from '../helper/helper';

const PosterInfo = ({ title, genres }) => {
  const genreArray = [];

  Object.entries(listGenres).filter(([key, value]) => {
    if (genres.includes(value)) {
      genreArray.push(capitalizeFirstLetter(key));
    }
    return genreArray;
  });

  return (
    <div className="poster-cart">
      <div className="poster-icons">
        <span>
          <IoIosPlayCircle size={'31px'} className="poster-icon" />
        </span>
        <span>
          <IoChevronDownCircleOutline size={'32px'} className="poster-icon" />
        </span>
      </div>
      <div className="poster-text">
        <h3>{title}</h3>
        <div className="poster-genres">
          {genreArray.splice(0, 3).join(' • ')}
        </div>
      </div>
    </div>
  );
};

export default PosterInfo;

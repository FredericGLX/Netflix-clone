import './PosterInfo.scss';
import { IoIosPlayCircle } from 'react-icons/io';
import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { genres as listGenres } from '../helper/list_genres';
import { capitalizeFirstLetter } from '../helper/helper';

const PosterInfo = ({ title, genres }) => {
  const genreArray = [];
  // const dot = &#9679;

  Object.entries(listGenres).filter(([key, value]) => {
    if (genres.includes(value)) {
      genreArray.push(capitalizeFirstLetter(key));
    }
    return genreArray;
  });

  return (
    <div className="movie-poster">
      <div className="poster-icons">
        <IoIosPlayCircle size={'27px'} className="poster-icon" />
        <BsPlusCircle size={'22px'} className="poster-icon" />
        <IoChevronDownCircleOutline size={'28px'} className="poster-icon" />
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

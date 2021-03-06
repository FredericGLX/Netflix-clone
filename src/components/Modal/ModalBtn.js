import { useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { capitalizeFirstLetter, handleWatchlist } from '../helper/helper';
import Modal from './Modal';
import { BsPlayFill, BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { image_url } from '../helper/requests';
import { genres as listGenres } from '../helper/list_genres';
import netflixLogo from '../Search/img/netflix_alt_logo.jpeg';

const ModalBtn = ({
  children,
  title,
  description,
  date,
  language,
  genres,
  vote,
  image,
  objectData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconSign, setIconSign] = useState(false);
  const genreArray = [];

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModel = () => {
    checkIfInWatchlist(objectData);
    setIsOpen(true);
  };

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  // Compare genres list with current movie genre and return matches
  Object.entries(listGenres).filter(([key, value]) => {
    if (genres.includes(value)) genreArray.push(capitalizeFirstLetter(key));
    return genreArray;
  });

  const checkIfInWatchlist = (objectData) => {
    let storageArray = JSON.parse(localStorage.getItem('currentWatchlist'));
    if (!storageArray) {
      setIconSign(false);
    }
    if (storageArray) {
      let existingItem = storageArray.find((item) => item.id === objectData.id);
      if (existingItem) {
        setIconSign(true);
      }
    }
  };

  const handleFavouriteClick = () => {
    handleWatchlist(objectData);
    if (!iconSign) setIconSign(true);
    if (iconSign) setIconSign(false);
  };

  return (
    <>
      <div onClick={handleOpenModel}>{children}</div>

      <Modal open={isOpen} onClose={handleCloseModal} domNodeRef={domNode}>
        <div className="modal-image-container">
          <img
            className="modal-img"
            src={image ? image_url + image : netflixLogo}
            alt={`Poster of ${title}`}
          />
          <div className="modal-icons">
            <button className="modal-play-btn">
              <BsPlayFill size="2rem" className="btn-logo" />
              Play
            </button>
            <div className="watchlist-icon">
              {!iconSign ? (
                <BsPlusCircle
                  size="3rem"
                  style={{ stroke: '#000', strokeWidth: '0.1' }}
                  onClick={() => handleFavouriteClick()}
                />
              ) : (
                <AiOutlineMinusCircle
                  size="3.1rem"
                  style={{ stroke: '#000', strokeWidth: '0.1' }}
                  onClick={() => handleFavouriteClick()}
                />
              )}
            </div>
          </div>
          <div className="modal-bottom-fade"></div>
        </div>

        <div className="modal-content">
          <div className="modal-title">{title}</div>
          <div className="modal-description">{description}</div>
          <hr />
          <div className="modal-info">
            <div className="modal-about">
              About <span className="modal-info-title">{title}</span>
            </div>
            <p className="modal-p1">
              Genres: <span>{genreArray.join(', ')}</span>
            </p>
            <p className="modal-p2">
              Release date: <span>{date}</span>
            </p>
            <p className="modal-p3">
              Original language: <span>{language}</span>
            </p>
            <p className="modal-p4">
              Average vote: <span>{vote}</span>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalBtn;

import Modal from './Modal';
import { BsPlayFill, BsPlusCircle } from 'react-icons/bs';
import { useState } from 'react';
import { image_url, capitalizeFirstLetter } from '../helper/helper';
import { genres as listGenres } from '../helper/list_genres';
import useClickOutside from '../../hooks/useClickOutside';

const ModalBtn = ({
  children,
  title,
  description,
  date,
  language,
  genres,
  vote,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const genreArray = [];

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModel = () => {
    setIsOpen(true);
  };

  // Passes as a Ref to Modal.js to close on outside click
  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  // Compare genres list with current movie genre and return matches
  Object.entries(listGenres).filter(([key, value]) => {
    if (genres.includes(value)) genreArray.push(key);
    return genreArray.toString();
  });

  return (
    <>
      <div onClick={handleOpenModel}>{children}</div>

      <Modal open={isOpen} onClose={handleCloseModal} domNodeRef={domNode}>
        <div className="modal-image-container">
          <img
            className="modal-img"
            src={image_url + image}
            alt={`Poster of ${title}`}
          />
          <div className="modal-icons">
            <button className="modal-play-btn">
              <BsPlayFill size="2rem" className="btn-logo" />
              Play
            </button>
            <div className="watchlist-icon">
              <BsPlusCircle
                size="3rem"
                style={{ stroke: '#000', strokeWidth: '0.1' }}
              />
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
            <p>
              Genres:{' '}
              <span>{capitalizeFirstLetter(genreArray.join(', '))}</span>
            </p>
            <p>
              Release date: <span>{date}</span>
            </p>
            <p>
              Original language: <span>{language}</span>
            </p>
            <p>
              Average vote: <span>{vote}</span>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalBtn;

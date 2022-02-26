import React, { useEffect, useState } from 'react';
import ModalBtn from '../Modal/ModalBtn';
import PosterInfo from '../PosterInfo/PosterInfo';
import { image_url } from '../helper/requests';
import netflixLogo from '../Search/img/netflix_alt_logo.jpeg';
import { motion } from 'framer-motion';
import {
  watchlistTitle,
  watchlistHasResults,
  watchlistNoResults,
} from '../helper/motionHelper';

const MyList = () => {
  let [storageArray, setStorageArray] = useState([]);
  useEffect(() => {
    setStorageArray(JSON.parse(localStorage.getItem('currentWatchlist')));
  }, [storageArray]);

  return (
    <div className="watchlist-container">
      <motion.h1
        className="watchlist-title"
        variants={watchlistTitle}
        initial="hidden"
        animate="visible"
      >
        My List:
      </motion.h1>
      <div className="watchlist-results">
        {storageArray && storageArray.length > 0 ? (
          storageArray.map((item) => {
            return (
              <div className="mylist-cart">
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
                  <motion.img
                    className="watchlist-img"
                    src={
                      item.backdrop_path
                        ? image_url + item.backdrop_path
                        : netflixLogo
                    }
                    alt={item.title}
                    variants={watchlistHasResults}
                    initial="hidden"
                    animate="visible"
                  />
                  <PosterInfo
                    title={item.title || item.name}
                    genres={item.genre_ids}
                    objectData={item}
                  />
                </ModalBtn>
              </div>
            );
          })
        ) : (
          <motion.h2
            className="watchlist-title"
            variants={watchlistNoResults}
            initial="hidden"
            animate="visible"
          >
            No content in watchlist
          </motion.h2>
        )}
      </div>
    </div>
  );
};

export default MyList;

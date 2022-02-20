import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import './Search.scss';
import { SearchContext } from '../contexts/SearchContext';
import { capitalizeFirstLetter } from '../helper/helper';
import ModalBtn from '../Modal/ModalBtn';
import { image_url } from '../helper/requests';
import netflixLogo from './img/netflix_alt_logo.jpeg';
import { motion } from 'framer-motion';
import { searchPageFade } from '../helper/motionHelper';

const Search = () => {
  const { searchContent, query } = useContext(SearchContext);

  return (
    <>
      <Navbar />
      <motion.div
        className="search-container"
        variants={searchPageFade}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="search-title-results">
          <h1 className="search-title">
            Search results for:{' '}
            {query.length > 0 ? capitalizeFirstLetter(query) : ''}
          </h1>
          <div className="search-results">
            {searchContent.length > 0 &&
              searchContent.map((item) => {
                return (
                  <ModalBtn
                    image={item.backdrop_path}
                    title={item.title}
                    description={item.overview}
                    genres={item.genre_ids}
                    language={item.original_language}
                    date={item.release_date}
                    vote={item.vote_average}
                    objectData={item}
                  >
                    <img
                      className="search-results-img"
                      src={
                        item.backdrop_path
                          ? image_url + item.backdrop_path
                          : netflixLogo
                      }
                      alt={item.title}
                    />
                  </ModalBtn>
                );
              })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Search;

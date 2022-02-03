import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import './Search.scss';
import { SearchContext } from '../contexts/SearchContext';
import { capitalizeFirstLetter } from '../helper/helper';
import ModalBtn from '../Modal/ModalBtn';
import { image_url } from '../helper/helper';
import netflixLogo from './img/netflix_alt_logo.jpeg';

const Search = () => {
  const { searchContent, query } = useContext(SearchContext);

  console.log('results ==>', searchContent);

  return (
    <>
      <Navbar />
      <div className="search-container">
        <div>
          <h1 className="search-title">
            Search results for: {query ? capitalizeFirstLetter(query) : ''}
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
      </div>
    </>
  );
};

export default Search;

import React, { useState } from 'react';
import axios from 'axios';

export const SearchContext = React.createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState();
  const [searchContent, setSearchContent] = useState({});

  const searchHandler = (query) => {
    setQuery(query);
    fetchSearch(query);
  };

  const fetchSearch = async (searchTerms) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerms}&page=1&include_adult=false`
    );
    setSearchContent(data.results);
  };

  return (
    <SearchContext.Provider value={{ query, searchHandler, searchContent }}>
      {children}
    </SearchContext.Provider>
  );
}

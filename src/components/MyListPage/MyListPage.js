import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import './Watchlist.scss';
import Watchlist from './Watchlist';
import Search from '../Search/Search';
import { SearchContext } from '../contexts/SearchContext';

const MyListPage = () => {
  const { query } = useContext(SearchContext);

  return (
    <>
      <Navbar />
      {query === '' ? (
        <>
          <Watchlist />
        </>
      ) : (
        <Search />
      )}
    </>
  );
};

export default MyListPage;

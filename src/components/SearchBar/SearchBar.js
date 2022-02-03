import { useState, useRef, useEffect, useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import './SearchBar.scss';
import useClickOutside from '../../hooks/useClickOutside';
import { useNavigate } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
import { SearchContext } from '../contexts/SearchContext';

const SearchBar = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  // Search
  const [searchInput, setSearchInput] = useState('');
  const { searchHandler } = useContext(SearchContext);

  const searchQueryHandler = () => {
    searchHandler(searchInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchQueryHandler();
    if (searchInput.length > 0) navigate('/search');
  };

  const handleClick = () => {
    if (!isSearchBarOpen) {
      setIsSearchBarOpen(true);
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
      setIsSearchBarOpen(false);
    }
  };

  let domNode = useClickOutside(() => {
    setIsSearchBarOpen(false);
  });

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // useEffect(() => {
  //   if (searchInput.length > 0) searchQueryHandler();
  // }, [searchInput]);

  return (
    <div className="search-container" ref={domNode}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search content"
          className="searchbar-input"
          ref={inputRef}
          onChange={handleChange}
        />
      </form>
      <BiSearch
        className="search-icon"
        size="2.5rem"
        color="#fff"
        onClick={handleClick}
      />
    </div>
  );
};

export default SearchBar;

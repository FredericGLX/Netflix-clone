import './SearchBar.scss';
import { useState, useRef, useContext } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { SearchContext } from '../contexts/SearchContext';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  const inputRef = useRef();
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const { searchHandler, query } = useContext(SearchContext);

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
    searchHandler(e.target.value);
  };

  return (
    <div className="searchbar-container" ref={domNode}>
      <input
        type="text"
        placeholder="Search content"
        className={`searchbar-input ${
          isSearchBarOpen === true ? 'active' : ''
        }`}
        ref={inputRef}
        onChange={handleChange}
        value={query}
      />
      <div onClick={handleClick}>
        <BiSearch className="search-icon" size="2.7rem" color="#fff" />
      </div>
    </div>
  );
};

export default SearchBar;

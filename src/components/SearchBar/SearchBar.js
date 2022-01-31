import { useState, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import './SearchBar.scss';
import useClickOutside from '../../hooks/useClickOutside';

const SearchBar = () => {
  const inputRef = useRef();
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

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

  return (
    <div className="search-container" ref={domNode}>
      <input
        type="text"
        placeholder="Search content"
        className="searchbar-input"
        ref={inputRef}
        onChange={handleChange}
      />
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

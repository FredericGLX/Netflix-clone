import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import useClickOutside from '../../hooks/useClickOutside';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) setIsOpen(false);
    if (!isOpen) setIsOpen(true);
  };

  const domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <>
      {isOpen && (
        <input
          type="text"
          placeholder="Search content"
          ref={domNode}
          className="searchbar-input"
        />
      )}
      <BiSearch
        className="search-icon"
        size="2.5rem"
        color="#fff"
        onClick={handleClick}
      />
      ;
    </>
  );
};

export default SearchBar;

import { useState, useEffect } from 'react';

const useScroll = (windowHeight) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      window.scrollY > windowHeight
        ? setIsScrolled(true)
        : setIsScrolled(false);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [windowHeight]);

  return isScrolled;
};

export default useScroll;

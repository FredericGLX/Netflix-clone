import { useRef, useEffect } from 'react';

// Avoid memory leak if component is unmounted before API response is received
export default function useMounted() {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted;
}

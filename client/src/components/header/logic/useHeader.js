import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useHeader = () => {
  const [position, setPosition] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const scrollhandler = () => {
      setPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', scrollhandler);
    return () => {
      window, removeEventListener('scroll', scrollhandler);
    };
  }, []);
  return { position, path: location.pathname };
};

export default useHeader;

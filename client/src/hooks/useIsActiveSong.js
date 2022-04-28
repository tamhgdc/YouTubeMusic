import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useIsActiveSong = () => {
  const { activeSong } = useSelector((state) => state.initial);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (!Object.keys(activeSong).length) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [activeSong]);
  return { isActive };
};

export default useIsActiveSong;

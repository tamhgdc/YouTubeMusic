import { useCallback, useState } from 'react';

const useHover = () => {
  const [isHover, setHover] = useState(false);

  const setIsHover = useCallback(() => {
    setHover(!isHover);
  }, [isHover]);

  return { isHover, setIsHover };
};
export default useHover;

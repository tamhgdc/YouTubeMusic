import { useCallback, useEffect, useRef, useState } from 'react';

const useSlider = (data) => {
  const [position, setPosition] = useState(0);
  const maxPosition = data.length * 195;
  const slidePrev = useCallback(() => {
    setPosition((prev) => prev - 195);
  }, []);
  const slideNext = useCallback(() => {
    setPosition((prev) => prev + 195);
  }, []);
  return { position, maxPosition, slidePrev, slideNext };
};

export default useSlider;

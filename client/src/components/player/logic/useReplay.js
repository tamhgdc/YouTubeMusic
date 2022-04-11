import { useCallback, useEffect, useState } from 'react';

const useReplay = (presentTime, duration, progressRef, audioRef) => {
  const [isReplay, setIsReplay] = useState(false);
  useEffect(() => {
    if (isReplay) {
      if (Math.floor(presentTime) == duration - 1) {
        progressRef.current.value = 0;
        audioRef.current.currentTime = 0;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presentTime, duration, isReplay]);
  const toogleIsReplay = useCallback(() => {
    setIsReplay(!isReplay);
  }, [isReplay]);

  return { isReplay, toogleIsReplay };
};

export default useReplay;

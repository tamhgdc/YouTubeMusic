import { useCallback, useEffect, useState } from 'react';

const usePresentTime = (progressRef, audioRef, isPlaying, duration) => {
  const [presentTime, setPresentTime] = useState(0);

  const changeRange = useCallback(
    (e) => {
      setPresentTime(e.target.value);
      audioRef.current.currentTime = e.target.value;
    },
    [audioRef]
  );
  const changePlayerDuringPlay = useCallback(() => {
    setPresentTime(progressRef.current.value);
  }, [progressRef]);

  useEffect(() => {
    const playInterval = setInterval(() => {
      progressRef.current.value = audioRef.current.currentTime;
      changePlayerDuringPlay();
    }, 500);
    if (isPlaying) {
      playInterval;
    } else {
      clearInterval(playInterval);
    }
    return () => {
      clearInterval(playInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);
  return { presentTime, changeRange };
};

export default usePresentTime;

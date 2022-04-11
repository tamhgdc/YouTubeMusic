import { useCallback, useState } from 'react';

const useTooglePlay = (audioRef) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const tooglePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);
  return { tooglePlay, isPlaying };
};
export default useTooglePlay;

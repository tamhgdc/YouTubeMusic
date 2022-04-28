import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useTooglePlay = (audioRef) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { activeSong } = useSelector(state => state.initial)
  const tooglePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);
  useEffect(() => {
    
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [activeSong, isPlaying, audioRef])
  return { tooglePlay, isPlaying };
};
export default useTooglePlay;

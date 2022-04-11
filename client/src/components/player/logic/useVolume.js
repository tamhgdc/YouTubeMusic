import { useCallback, useState, useEffect } from 'react';

const useVolume = (audioRef) => {
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const currentVolume = Number(localStorage.getItem('volume'));

  const toogleMuted = useCallback(() => {
    setIsMuted(!isMuted);
    if (!isMuted) {
      audioRef.current.volume = 0;
    } else {
      const calculateVolume = (volume * 10) / 1000;
      audioRef.current.volume = calculateVolume;
    }
  }, [isMuted, volume, audioRef]);

  const setCurrentVolume = useCallback(
    (event) => {
      const calculateVolume = (event.target.value * 10) / 1000;
      setVolume(event.target.value);
      audioRef.current.volume = calculateVolume;
      localStorage.setItem('volume', event.target.value);
    },
    [audioRef]
  );
  useEffect(() => {
    if (currentVolume == 0) {
      localStorage.setItem('volume', 50);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setVolume(currentVolume);
    const calculateVolume = (currentVolume * 10) / 1000;
    audioRef.current.volume = calculateVolume;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { volume, isMuted, toogleMuted, setCurrentVolume };
};
export default useVolume;

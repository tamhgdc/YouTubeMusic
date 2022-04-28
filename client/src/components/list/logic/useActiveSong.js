import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSong, setIsPlaying } from '../../../store/slices/initialSlice';

const useActiveSong = (id) => {
  const dispatch = useDispatch();
  const { activeSong } = useSelector((state) => state.initial);
  const [isCompare, setIsCompare] = useState(false);

  const addSong = useCallback(
    (song) => {
      dispatch(setActiveSong(song));
    },
    [dispatch]
  );

  useEffect(() => {
    if (id === activeSong.id) {
      setIsCompare(true);
    } else {
      setIsCompare(false);
    }
  }, [id, activeSong]);

  return { addSong, isCompare };
};

export default useActiveSong;

import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPlaying } from '../../../store/slices/initialSlice';

const useTooglePlay = (audioRef) => {
  const { activeSong, isPlaying } = useSelector((state) => state.initial);
  const dispatch = useDispatch();
  const tooglePlay = useCallback(() => {
    dispatch(setIsPlaying())
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef, dispatch]);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [activeSong, isPlaying, audioRef]);
  return { tooglePlay, isPlaying };
};
export default useTooglePlay;

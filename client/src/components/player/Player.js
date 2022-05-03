import React, { useRef } from 'react';

import useTooglePlay from './logic/useTooglePlay';
import useSetDuration from './logic/useSetDuration';
import usePresentTime from './logic/usePresentTime';
import useHover from '../../utils/hooks/useHover';
import useVolume from './logic/useVolume';
import { useSelector } from 'react-redux';
import usePlay from './logic/usePlay';
import useReplay from './logic/useReplay';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import PlayerNav from './PlayerNav';
import PlayerDesc from './PlayerDesc';
import PlayerSett from './PlayerSett';

import { style } from './style/style';

const Player = () => {
  const audioRef = useRef();
  const progressRef = useRef();

  const { tooglePlay, isPlaying } = useTooglePlay(audioRef);
  const { duration, setDurationValue } = useSetDuration();
  const { presentTime, changeRange } = usePresentTime(progressRef, audioRef, isPlaying, duration);
  const { isHover, setIsHover } = useHover();
  const { volume, isMuted, toogleMuted, setCurrentVolume } = useVolume(audioRef);
  const { isReplay, toogleIsReplay } = useReplay(presentTime, duration, progressRef, audioRef);
  const { activeSong } = useSelector((state) => state.initial);
  const { usePlayNext, usePlayPrev } = usePlay(presentTime, duration);

  return (
    <>
      <audio ref={audioRef} src={activeSong.src} onLoadedMetadata={setDurationValue} />
      <Box sx={style}>
        <Slider
          ref={progressRef}
          onChange={changeRange}
          value={presentTime}
          max={duration}
          sx={style.inputs}
          size="small"
          aria-label="Small"
        />
        <PlayerNav
          tooglePlay={tooglePlay}
          isPlaying={isPlaying}
          presentTime={presentTime}
          duration={duration}
          usePlayPrev={usePlayPrev}
          usePlayNext={usePlayNext}
        />
        <PlayerDesc img={activeSong.img} name={activeSong.name} author={activeSong.author} />
        <PlayerSett
          isHover={isHover}
          setIsHover={setIsHover}
          volume={volume}
          isMuted={isMuted}
          toogleMuted={toogleMuted}
          setCurrentVolume={setCurrentVolume}
          isReplay={isReplay}
          toogleIsReplay={toogleIsReplay}
        />
      </Box>
    </>
  );
};

export default Player;

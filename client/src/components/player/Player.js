import React, { useRef } from 'react';
import { useTooglePlay } from './logic/useTooglePlay';
import { useSetDuration } from './logic/useSetDuration';
import { calculateTime } from '../../utils/calculateTime';
import second from '../../assets/music.mp3'
import { style } from './style/style'
import { usePresentTime } from './logic/usePresentTime';

import Box from '@mui/material/Box'; 
import Slider from '@mui/material/Slider';

import PlayIcon from '../../assets/PlayIcon';
import PauseIcon from '../../assets/PauseIcon';
import NextIcon from '../../assets/NextIcon';
import PrevIcon from '../../assets/PrevIcon';
import VolumeIcon from '../../assets/VolumeIcon';
import MutedIcon from '../../assets/MutedIcon';


export const Player = () => {
    const audioRef = useRef();
    const progressRef = useRef();

    const { tooglePlay, isPlaying } = useTooglePlay(audioRef);
    const { duration, setDurationValue } = useSetDuration();
    const { presentTime, changeRange } = usePresentTime(progressRef, audioRef, isPlaying);


    return (
        <>
        <audio ref={audioRef} src={second} controls onLoadedMetadata={setDurationValue} />   
        <Box sx={style} >
        <Slider
            sx={style.inputs}
            size="small"
            defaultValue={0}
            max={duration}
            value={presentTime}
            aria-label="Small"
            ref={progressRef} 
            onChange={changeRange}
            
          />
       


        <Box sx={style.item}>
          <img src="https://lh3.googleusercontent.com/u_sf0iYxpEMZiuI3b_rknEAERnAbEF20ez8EZVPgXPqQ0US0Uvb2SEs-9Sx3jOhA1woo_KKC8S3US4BaVw=w544-h544-l90-rj" alt="" />
          <Box sx={style.item.about}>
            <Box sx={style.item.about.title}>
            Привередливые кони
            </Box>
            <Box sx={style.item.about.author}>
            Владимир Высоцкий
            </Box>
          </Box>
        </Box>
        {/* <Box sx={style.manage}>
          {isHoverVolume && 
            <Slider
                sx={style.volume}
                size="small"
                defaultValue={0}
                value={volume}   
                max={100}
                aria-label="Small"
                onChange={onChangeVolume}
              />
          }
          {!isMuted ?
            <Box
              onClick={toggleMuted}
              onMouseEnter={() => setIsHoverVolume(true)}
            >
              <VolumeIcon />
            </Box> :
            <>
              <Box
                onClick={toggleMuted}
              >
                <MutedIcon />
              </Box>
            </>
          }
          </Box> */}
          </Box>
            
        </>
    )
}


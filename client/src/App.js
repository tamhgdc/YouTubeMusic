
import React, { useCallback, useEffect, useRef, useState } from 'react'
import LeftBar from './components/leftbar/LeftBar';
import Box from '@mui/material/Box';
import List from './components/list/List';
import music from './assets/music.mp3'
import PlayIcon from './assets/PlayIcon';
import PauseIcon from './assets/PauseIcon';
import NextIcon from './assets/NextIcon';
import PrevIcon from './assets/PrevIcon';
import VolumeIcon from './assets/VolumeIcon';
import MutedIcon from './assets/MutedIcon';
import Slider from '@mui/material/Slider';

const style = {
  width: '100%',
  height: '64px',
  position: 'fixed',
  bottom: '0',
  left: '0',
  padding: '0 20px',
  boxSizing: 'border-box',
  background: 'rgb(33, 33, 33)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  inputs: {
    position: 'absolute',
    cursor: 'pointer',
    display: 'block',
    top: '-14px',
    left: '-2px',
    width: '100%',
    background: '',
   
  },
  svg: {
    cursor: 'pointer'
  },
  nav: {
    width: '144px',
    display: 'flex',
    alignItems: 'center'

  }, 
  time: {
    display: 'flex',
    color: '#aaaaaa',
    fontSize: '12px',
    marginLeft: '20px',
    alignItems: 'center'
  },
  item: {
    maxWidth: '400px',
    width: '100%',
    display: 'flex',
    img: {
      width: '40px',
      marginRight: '20px',
    },
    about: {
      title: {
        fontWeight: '500',
        color: '#fff',
        fontSize: '14px',
        lineHeight: '1.2'
      },
      author: {
        color: 'rgba(255, 255, 255, .7)',
        fontSize: '13px',
        lineHeight: '1.2'
      }
    }
  },
  manage: {
    display: 'flex',
    alignItems: 'center'
  },
  volume: {
    width: '65px',
    height: '3px',
    marginRight: '20px'
  }
}

const App = () => {

  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [maxTime, setMaxTime] = useState(0);

 // references
 const audioPlayer = useRef();   // reference our audio component
 const progressBar = useRef();   // reference our progress bar
 const animationRef = useRef();  // reference the animation

 useEffect(() => {
   const seconds = Math.floor(audioPlayer.current.duration);
   setDuration(seconds);
   setMaxTime(seconds)
 }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

 const calculateTime = (secs) => {
   const minutes = Math.floor(secs / 60);
   const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
   const seconds = Math.floor(secs % 60);
   const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
   return `${returnedMinutes}:${returnedSeconds}`;
 }

 const togglePlayPause = () => {
   const prevValue = isPlaying;
   setIsPlaying(!prevValue);
   if (!prevValue) {
     audioPlayer.current.play();
     animationRef.current = requestAnimationFrame(whilePlaying);
    
   } else {
     audioPlayer.current.pause();
    
   }
 }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }


  const changeRange = (e) => {
    audioPlayer.current.currentTime = e.target.value;

    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
   
    
    setCurrentTime(progressBar.current.value);
  }
  const onDurationChange = (e) => {
    const duration = calculateTime(e.target.duration);
    setDuration(duration)
  }


  useEffect(() => {
    audioPlayer.current.volume = 0.2
  }, [audioPlayer])
  const onChangeVolume = (e) => {
    audioPlayer.current.volume = e.target.value * 100 / 10000
  }
  return (
    <Box sx={{display: 'flex'}}>
      {/* <LeftBar /> */}
      <Box sx={{width: '100%', height: '100vh', padding: '10px', boxSizing: 'border-box'}}>
        {/* <List /> */}
        <audio ref={audioPlayer}  src={music} onDurationChange={onDurationChange}>
        </audio>

      </Box>
      <Box sx={style}>
        <Slider
            sx={style.inputs}
            size="small"
            defaultValue={0}
            max={maxTime}
            value={currentTime}
            aria-label="Small"
            ref={progressBar} 
            onChange={changeRange}
          />
        {/* <input style={style.inputs} type="range" className='progressBar'  defaultValue="0" ref={progressBar} onChange={changeRange} /> */}
        <Box sx={style.nav}>
            <Box sx={style.svg}>
              <PrevIcon />
            </Box>
            {!isPlaying ?
              <Box sx={style.svg} onClick={togglePlayPause}>
                  <PlayIcon />
              </Box> :
              <Box sx={style.svg} onClick={togglePlayPause}>
                  <PauseIcon />
                </Box>
            }
            <Box sx={style.svg}>
              <NextIcon />
            </Box>
            <Box sx={style.time}>
             <span>{calculateTime(currentTime)} </span> /
             <span>{calculateTime(duration)}</span>
            </Box>
        </Box>
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
        <Box sx={style.manage}>
          <Slider
            sx={style.volume}
            size="small"
            defaultValue={0}   
            max={100}
            aria-label="Small"
            onChange={onChangeVolume}
          />
          {/* {!isMuted ?
            <Box>
              <VolumeIcon />
            </Box> :
            <Box>
              <MutedIcon />
            </Box>
          } */}
            
        </Box>
      </Box>
    </Box>
  )
}

export default App
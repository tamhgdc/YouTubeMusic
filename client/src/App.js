
import React, { useEffect, useRef, useState } from 'react'
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

const App = () => {
  const [isPlaying, setIsPlaying] = useState()
  const [duration, setDuration] = useState()
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false)

  const musicRef = useRef()
  const animationRef = useRef();  
  const progressBar = useRef();  

  const changeRange = (e) => {
    console.log(e.target.value);
    musicRef.current.currentTime = e.target.value ;
    progressBar.current.value = e.target.value 
    changePlayerCurrentTime(e);
    
  }
  const changePlayerCurrentTime = (e) => {
    setCurrentTime(progressBar.current.value);
   
  }
  const playSong = () => {
      musicRef.current.play()
      setIsPlaying(true)
      animationRef.current = requestAnimationFrame(whilePlaying)
  }
  const stopSong = () => {
      musicRef.current.pause()
      setIsPlaying(false)
  }
  useEffect(() => {
    console.log(musicRef.current.duration);
    progressBar.current.max = musicRef.current.duration;

  }, [musicRef?.current?.loadedmetadata, musicRef?.current?.readyState])
  const whilePlaying = () => {
    progressBar.current.value = musicRef.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }
  const onDurationChangeHandler = (e) => {
    const seconds = Math.floor(e.target.duration);
    setDuration(seconds);
};

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
}
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
  const tooglePlayMusic = () => {
    setIsPlaying(!isPlaying)
    if(!isPlaying) {
      musicRef.current.play()
    } else {
      musicRef.current.pause()
    }
  }
  console.log(progressBar);
  return (
    <Box sx={{display: 'flex'}}>
      {/* <LeftBar /> */}
      <Box sx={{width: '100%', height: '100vh', padding: '10px', boxSizing: 'border-box'}}>
        {/* <List /> */}
        <audio ref={musicRef}  src={music} onDurationChange={onDurationChangeHandler}>
        </audio>

      </Box>
      <Box sx={style}>
        <Slider
            sx={style.inputs}
            size="small"
            defaultValue={0}
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
              <Box sx={style.svg} onClick={tooglePlayMusic}>
                  <PlayIcon />
              </Box> :
              <Box sx={style.svg} onClick={tooglePlayMusic}>
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
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          {!isMuted ?
            <Box>
              <VolumeIcon />
            </Box> :
            <Box>
              <MutedIcon />
            </Box>
          }
            
        </Box>
      </Box>
    </Box>
  )
}

export default App
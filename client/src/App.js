
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'; 
import music from './assets/music1.mp3'
import music1 from './assets/music.mp3'
import PlayIcon from './assets/PlayIcon';
import PauseIcon from './assets/PauseIcon';
import NextIcon from './assets/NextIcon';
import PrevIcon from './assets/PrevIcon';
import VolumeIcon from './assets/VolumeIcon';
import MutedIcon from './assets/MutedIcon';
import Slider from '@mui/material/Slider';
import { Player } from './components/player/Player';

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
    color: '#ff0100',
    "& * ": {
      transition: 'all .1s ease'
    },
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

const list = [
  {
    song: music,
  },
  {
    song: music1,
  },


]

const App = () => {

//   // state
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [maxTime, setMaxTime] = useState(0);
//   const [isMuted, setisMuted] = useState(false)
//   const [volume, setVolume] = useState(50)
//   const [isHoverVolume, setIsHoverVolume] = useState(false)
//   const [songs, setSongs] = useState(list)
//   const [current, setCurrent] = useState(0)
//  // references
//  const audioPlayer = useRef();   // reference our audio component
//  const progressBar = useRef();   // reference our progress bar
//  const animationRef = useRef();  // reference the animation

//  useEffect(() => {
//    const seconds = Math.floor(audioPlayer.current.duration);
//    setDuration(seconds);
//    setMaxTime(seconds)
//    setInterval(() => {
//     whilePlaying()
//    }, 50);
//    console.log('<=============');
//  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

//  const calculateTime = (secs) => {
//    const minutes = Math.floor(secs / 60);
//    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
//    const seconds = Math.floor(secs % 60);
//    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
//    return `${returnedMinutes}:${returnedSeconds}`;
//  }

//  const togglePlayPause = () => {
//    const prevValue = isPlaying;
//    setIsPlaying(!prevValue);
//    if (!prevValue) {
//      audioPlayer.current.play();

    
//    } else {
//      audioPlayer.current.pause();
//    }
//  }

//   const whilePlaying = () => {
//     console.log();
//     progressBar.current.value = audioPlayer.current.currentTime;
//     changePlayerCurrentTime();
    
//   }


//   const changeRange = (e) => {
//     setCurrentTime(e.target.value)
//     console.log(e.target.value, '<====');
//     audioPlayer.current.currentTime = e.target.value;

//     changePlayerCurrentTime();
//   }

//   const changePlayerCurrentTime = () => {    
//     setCurrentTime(progressBar.current.value);
//   }
//   const onDurationChange = (e) => {
   
//     const duration = calculateTime(e.target.duration);
//     setDuration(duration)
//   }


//   useEffect(() => {
//     audioPlayer.current.volume = 0.5

//   }, [])
//   useEffect(() => {
//     const res = volume * 100 / 10000
//     audioPlayer.current.volume = res;
//   }, [volume])
//   const onChangeVolume = (e) => {
//     setisMuted(false)
//     setVolume(e.target.value)
    
//   }

//   const toggleMuted = () => {
//     setisMuted(!isMuted);
//     if (!isMuted) {
//       setVolume(0)
//     } else {
//       setVolume(50)
//     }
//   }
//   const changeSong = () => {
//     if(current === 1) {
//       setCurrent(0)
      
//     } else {
//       audioPlayer.current.autoplay = true;
//       setCurrent(current + 1)
//     }
//   }
  return (
    <Box sx={{display: 'flex'}}>
    <Player />

     
    </Box>
  )
}

export default App
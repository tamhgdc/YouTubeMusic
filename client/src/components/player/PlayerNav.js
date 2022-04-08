import React from 'react'
import style from './style/style'

const PlayerNav = ({tooglePlay, isPlaying, presentTime, duration}) => {
  return (
    <Box sx={style.nav}>

        <Box sx={style.svg} >
            <PrevIcon />
        </Box>

        {!isPlaying ?
        <Box sx={style.svg} onClick={tooglePlay}>
            <PlayIcon />
        </Box> 
        :
        <Box sx={style.svg} onClick={tooglePlay}>
            <PauseIcon />
        </Box>
        }
        
        <Box sx={style.svg} >
            <NextIcon />
        </Box>
        <Box sx={style.time}>
            <Box>{calculateTime(presentTime)} </Box> / <Box>{calculateTime(duration)}</Box>
        </Box>
    </Box>
  )
}

export default PlayerNav
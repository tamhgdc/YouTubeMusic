import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { style } from './style/style';

import PlayIcon from '../../assets/PlayIcon';
import PauseIcon from '../../assets/PauseIcon';
import NextIcon from '../../assets/NextIcon';
import PrevIcon from '../../assets/PrevIcon';

import { calculateTime } from '../../utils/calculateTime';

const PlayerNav = ({ tooglePlay, isPlaying, presentTime, duration }) => (
  <Box sx={style.nav}>
    <Box sx={style.svg}>
      <PrevIcon />
    </Box>

    {!isPlaying ? (
      <Box sx={style.svg} onClick={tooglePlay}>
        <PlayIcon />
      </Box>
    ) : (
      <Box sx={style.svg} onClick={tooglePlay}>
        <PauseIcon />
      </Box>
    )}

    <Box sx={style.svg}>
      <NextIcon />
    </Box>
    <Box sx={style.time}>
      <Box>{calculateTime(presentTime)}</Box>/<Box>{calculateTime(duration)}</Box>
    </Box>
  </Box>
);

export default memo(PlayerNav);

PlayerNav.propTypes = {
  tooglePlay: PropTypes.func,
  isPlaying: PropTypes.bool,
  presentTime: PropTypes.number,
  duration: PropTypes.number,
};

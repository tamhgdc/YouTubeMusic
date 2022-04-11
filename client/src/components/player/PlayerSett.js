import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import VolumeIcon from '../../assets/VolumeIcon';
import MutedIcon from '../../assets/MutedIcon';

import { style } from './style/style';
import ReplayIcon from '../../assets/ReplayIcon';

const PlayerSett = ({ isHover, isMuted, volume, toogleMuted, setCurrentVolume, isReplay, toogleIsReplay }) => {
  return (
    <Box sx={style.manage}>
      {!isHover && (
        <Slider
          sx={style.volume}
          size="small"
          value={volume}
          max={100}
          aria-label="Small"
          onChange={setCurrentVolume}
        />
      )}
      {!isMuted ? (
        <Box sx={style.manage.item} onClick={toogleMuted}>
          <VolumeIcon />
        </Box>
      ) : (
        <>
          <Box sx={style.manage.item} onClick={toogleMuted}>
            <MutedIcon />
          </Box>
        </>
      )}
      <Box sx={style.manage.item} onClick={toogleIsReplay}>
        <ReplayIcon isReplay={isReplay} />
      </Box>
    </Box>
  );
};

export default memo(PlayerSett);

PlayerSett.propTypes = {
  isHover: PropTypes.bool,
  isMuted: PropTypes.bool,
  volume: PropTypes.number,
  setVolume: PropTypes.func,
  setIsHover: PropTypes.func,
  toogleMuted: PropTypes.func,
  setCurrentVolume: PropTypes.func,
  toogleIsReplay: PropTypes.func,
  isReplay: PropTypes.bool,
};

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { style } from './style/style';

const PlayerDesc = ({ img, name, author, usePlayPrev }) => {
  return (
    <Box sx={style.item}>
      <img src={img} alt={name} />
      <Box sx={style.item.about}>
        <Box sx={style.item.about.title}>{name}</Box>
        <Box sx={style.item.about.author}>{author}</Box>
      </Box>
    </Box>
  );
};

export default memo(PlayerDesc);

PlayerDesc.propsType = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

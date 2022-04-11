import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import style from './style/style';

const ListItem = ({ img, name, author, album, time }) => {
  return (
    <Box sx={style.item}>
      <Box sx={style.item.wr}>
        <img src={img} />
        {name}
      </Box>
      <Box sx={style.item.text.wr}>{author}</Box>
      <Box sx={style.item.text.wr}>{album}</Box>
      <Box sx={style.item.text}>{time}</Box>
    </Box>
  );
};

export default memo(ListItem);

ListItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  album: PropTypes.string,
  time: PropTypes.string,
};

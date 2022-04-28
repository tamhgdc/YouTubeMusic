import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import style from './style/style';
import useActiveSong from './logic/useActiveSong';
import PlayIcon from '../../assets/PlayIcon';

const ListItem = ({ img, name, author, album, time, onClick, item, id }) => {

  const { isCompare } = useActiveSong(id)
  const [hover, setHover] = useState(false)

  return (
    <Box sx={style.item} onClick={() => onClick(item)}>
      <Box sx={style.item.wr}>
       {isCompare && <Box sx={style.item.shadow}> <PlayIcon /> </Box>}
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
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import style from './style/style';
import useActiveSong from './logic/useActiveSong';
import PlayIcon from '../../assets/PlayIcon';
import SecondPlayIcon from '../../assets/SecondPlayIcon';

const ListItem = ({ img, name, author, album, time, onClick, item, id }) => {
  const { isCompare } = useActiveSong(id);
  const [hover, setHover] = useState(false);
  const hoverHandler = () => {
    setHover(!hover);
  };

  return (
    <Box
      sx={isCompare ? style.item.active : style.item}
      onClick={() => onClick(item)}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}>
      <Box sx={style.item.wr}>
        {hover && (
          <Box sx={style.item.shadow}>
            <PlayIcon />
          </Box>
        )}
        {!hover && isCompare && (
          <Box sx={style.item.shadow}>
            <SecondPlayIcon />
          </Box>
        )}
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

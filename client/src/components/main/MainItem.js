import React from 'react';

import { Box } from '@mui/system';

import style from './style/style';

import { Link } from 'react-router-dom';

const MainItem = ({ id, img, name, author }) => {
  return (
    <Box sx={style.item}>
      <Link to={`/album:${id}`}>
        <img src={img} />
      </Link>
      <Box
        sx={{
          position: 'absolute',
          marginTop: '6px',
          width: '180px',
        }}>
        <Box sx={{ fontSize: '14px' }}>{name}</Box>
        <Box
          sx={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, .7)',
            width: '180px',
            overflow: 'hidden',
            height: '50px',
            textOverflow: 'ellipsis',
            whiteSpace: 'pre',
          }}>
          {author}
        </Box>
      </Box>
    </Box>
  );
};

export default MainItem;

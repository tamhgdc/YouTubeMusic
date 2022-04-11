import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { style } from './style/style';

const PlayerDesc = ({ image, title, author }) => {
  return (
    <Box sx={style.item}>
      <img
        src="https://lh3.googleusercontent.com/u_sf0iYxpEMZiuI3b_rknEAERnAbEF20ez8EZVPgXPqQ0US0Uvb2SEs-9Sx3jOhA1woo_KKC8S3US4BaVw=w544-h544-l90-rj"
        alt=""
      />
      <Box sx={style.item.about}>
        <Box sx={style.item.about.title}>Привередливые кони</Box>
        <Box sx={style.item.about.author}>Владимир Высоцкий</Box>
      </Box>
    </Box>
  );
};

export default memo(PlayerDesc);

PlayerDesc.propsType = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

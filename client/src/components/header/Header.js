import React, { memo } from 'react';

import { Box } from '@mui/material';

import style from './style/style';

const Header = () => {
  return (
    <Box sx={style}>
      <Box>
        <img src="//music.youtube.com/img/on_platform_logo_dark.svg" />
      </Box>
      <Box sx={style.nav}>
        <Box sx={style.nav.item}>Главная</Box>
        <Box sx={style.nav.item}>Навигатор</Box>
        <Box sx={style.nav.item}>Библиотека</Box>
        <Box sx={style.nav.item}>Поиск</Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default memo(Header);

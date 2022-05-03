import React, { memo } from 'react';
import useFind from '../search/logic/useFind';

import { Box } from '@mui/material';

import style from './style/style';
import SearchInput from '../search/SearchInput';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isSearch, changeIsOpen } = useFind();
  return (
    <Box sx={style}>
      <Box>
        <img src="//music.youtube.com/img/on_platform_logo_dark.svg" />
      </Box>
      <Box sx={style.nav}>
        {isSearch && <SearchInput />}
        <Link to="/" style={style.nav.item}>
          Главная
        </Link>
        <Box sx={style.nav.item}>Навигатор</Box>
        <Box sx={style.nav.item}>Библиотека</Box>
        <Box sx={style.nav.item} onClick={changeIsOpen}>
          Поиск
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default memo(Header);

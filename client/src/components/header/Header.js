import React, { memo } from 'react';
import useHeader from './logic/useHeader';
import useFind from '../search/logic/useFind';

import SearchInput from '../search/SearchInput';
import HeaderItem from './HeaderItem';
import HeaderButtons from './HeaderButtons';

import { Box } from '@mui/material';

import style from './style/style';

const Header = () => {
  const { isSearch, changeIsOpen } = useFind();
  const { position, path, anchorEl, id, open, handleOpenPopover, handleClosePopover } = useHeader();

  return (
    <Box sx={position > 20 ? style.styleBackground : style}>
      <Box component={'img'} src="//music.youtube.com/img/on_platform_logo_dark.svg" />
      <Box sx={style.nav}>
        {isSearch && <SearchInput />}

        <HeaderItem to={'/'} path={path} text={'Главная'} />
        <HeaderItem to={'/nav'} path={path} text={'Навигаторе'} />
        <HeaderItem to={'/library/playlist'} path={path} text={'Библиотека'} />
        <HeaderItem notALink={true} to={'/search'} path={path} text={'Поиск'} onClick={changeIsOpen} />
      </Box>
      <HeaderButtons id={id} onClick={handleOpenPopover} open={open} anchorEl={anchorEl} onClose={handleClosePopover} />
    </Box>
  );
};

export default memo(Header);

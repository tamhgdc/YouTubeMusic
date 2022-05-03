import React, { memo, useEffect } from 'react';
import useFind from '../search/logic/useFind';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';

import style from './style/style';
import SearchInput from '../search/SearchInput';
import { Link } from 'react-router-dom';
import useHeader from './logic/useHeader';
import Auth from '../auth/Auth';

const Header = () => {
  const { isSearch, changeIsOpen } = useFind();
  const { position, path } = useHeader();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={position > 20 ? style.styleBackground : style}>
      <Box>
        <img src="//music.youtube.com/img/on_platform_logo_dark.svg" />
      </Box>
      <Box sx={style.nav}>
        {isSearch && <SearchInput />}
        <Link to="/" style={path == '/' ? style.nav.item.active : style.nav.item}>
          Главная
        </Link>
        <Box sx={path == '/nav' ? style.nav.item.active : style.nav.item}>Навигатор</Box>
        <Box sx={path == '/search' ? style.nav.item.active : style.nav.item} onClick={changeIsOpen}>
          Поиск
        </Box>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Button sx={style.enter} aria-describedby={id} onClick={handleClick}>
          ВОЙТИ
        </Button>
        <Auth id={id} open={open} anchorEl={anchorEl} onClose={handleClose} />
      </Box>
    </Box>
  );
};

export default memo(Header);

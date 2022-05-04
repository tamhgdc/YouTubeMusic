import React from 'react';
import { useLocation } from 'react-router-dom';

import { Box, Container } from '@mui/material';
import Chip from '@mui/material/Chip';

import style from './style/style';
import LibraryHeaderItem from './LibraryHeaderItem';
import LibraryHeaderSort from './LibraryHeaderSort';

const LibraryHeader = () => {
  const location = useLocation();

  return (
    <Container sx={style.header.wr}>
      <Box sx={style.header}>
        <LibraryHeaderItem to={'/library/playlist'} path={location.pathname} text={'ПЛЕЙЛИСТЫ'} />
        <LibraryHeaderItem to={'/library/songs'} path={location.pathname} text={'ТРЕКИ'} />
      </Box>
      <LibraryHeaderSort />
    </Container>
  );
};

export default LibraryHeader;

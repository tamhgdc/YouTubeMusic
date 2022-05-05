import React from 'react';
import useLibrary from './logic/useLibrary';

import { Box, Container } from '@mui/material';

import LibraryHeaderItem from './LibraryHeaderItem';
import LibraryHeaderSort from './LibraryHeaderSort';

import style from './style/style';

const LibraryHeader = () => {
  const { pathname } = useLibrary();
  return (
    <Container sx={style.header.wr}>
      <Box sx={style.header}>
        <LibraryHeaderItem to={'/library/playlist'} path={pathname} text={'ПЛЕЙЛИСТЫ'} />
        <LibraryHeaderItem to={'/library/songs'} path={pathname} text={'ТРЕКИ'} />
      </Box>
      <LibraryHeaderSort />
    </Container>
  );
};

export default LibraryHeader;

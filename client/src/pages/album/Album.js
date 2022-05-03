import { Box } from '@mui/material';
import React from 'react';
import AlbumHeader from '../../components/album/AlbumHeader';
import List from '../../components/list/List';

const Album = () => {
  return (
    <Box>
      <AlbumHeader />
      <List />
    </Box>
  );
};

export default Album;

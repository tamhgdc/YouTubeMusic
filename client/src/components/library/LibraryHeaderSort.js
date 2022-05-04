import React from 'react';

import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import style from './style/style';

const LibraryHeaderSort = () => {
  return (
    <Box sx={style.header.chip}>
      <Chip sx={style.header.chip.item} label={'Сначала новые'} />
    </Box>
  );
};

export default LibraryHeaderSort;

import React from 'react';

import { Box } from '@mui/system';
import MainHeader from '../../components/main/MainHeader';
import MainBody from '../../components/main/MainBody';

const Main = () => {
  return (
    <Box sx={{ color: '#fff'}}>
      <MainHeader />
      <MainBody />
    </Box>
  );
};

export default Main;

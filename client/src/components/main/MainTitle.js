import React from 'react';

import { Box } from '@mui/system';

import style from './style/style';

const MainTitle = ({ title }) => {
  return <Box sx={style.title}>{title}</Box>;
};

export default MainTitle;

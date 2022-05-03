import React from 'react';

import Box from '@mui/material/Box';

import style from './style/style';
import DootsIcon from '../../assets/DootsIcon';
import SearchItemSetup from './SearchItemSetup';

const SearchItem = ({ setup }) => {
  return (
    <Box sx={style.item}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://lh3.googleusercontent.com/Q71tFea8YK0_rb54F7ptrOdiq-2wKgImpWkHc9nEG_v_k-RqEtKW8XSmhLVOn5Vyz_WuRyQnuEq0UeHDxQ=w120-h120-l90-rj" />
        <Box>
          <Box>Мне каждый вечер зажигают свечи...</Box>
          <Box sx={style.item.about}>Владимир Высоцкий • Новый звук • 2:08 • </Box>
        </Box>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <DootsIcon />
        {setup && <SearchItemSetup />}
      </Box>
    </Box>
  );
};

export default SearchItem;

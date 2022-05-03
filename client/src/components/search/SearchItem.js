import React, { useState, memo } from 'react';
import SearchItemSetup from './SearchItemSetup';
import PropTypes from 'prop-types';
import useSetup from './logic/useSetup';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import style from './style/style';

import DootsIcon from '../../assets/DootsIcon';

const SearchItem = ({ img, name, author, album, time, onClick, item, id }) => {
  const { visible, handlerVisible } = useSetup();
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
        <IconButton onClick={handlerVisible}>
          <DootsIcon />
        </IconButton>
        {visible && <SearchItemSetup handlerVisible={handlerVisible} />}
      </Box>
    </Box>
  );
};

export default memo(SearchItem);

// SearchItem.propTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   time: PropTypes.string.isRequired,
//   onClick: PropTypes.array,
//   item: PropTypes.object.isRequired,
//   id: PropTypes.string.isRequired,
// };

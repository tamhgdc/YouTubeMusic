import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

import style from './style/style';

const LibraryHeaderItem = ({ to, text, path }) => {
  return (
    <Link to={to} style={path === to ? style.header.item.active : style.header.item}>
      {text}
    </Link>
  );
};

export default LibraryHeaderItem;

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import style from './style/style';

const HeaderItem = ({ to, path, text, notALink = false, onClick }) => {
  return !notALink ? (
    <Link to={to} style={path == to ? style.nav.item.active : style.nav.item}>
      {text}
    </Link>
  ) : (
    <Box style={path == to ? style.nav.item.active : style.nav.item} onClick={onClick}>
      {text}
    </Box>
  );
};

export default memo(HeaderItem);

HeaderItem.propTypes = {
  to: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  notALink: PropTypes.bool,
  onClick: PropTypes.func,
};

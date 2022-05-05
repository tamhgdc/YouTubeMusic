import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './style/style';

const LibraryHeaderItem = ({ to, text, path }) => {
  return (
    <Link to={to} style={path === to ? style.header.item.active : style.header.item}>
      {text}
    </Link>
  );
};

export default memo(LibraryHeaderItem);

LibraryHeaderItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

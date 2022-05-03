import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import ScopeIcon from '../../assets/ScopeIcon';

import style from './style/style';

const SearchDropdownItem = ({ text, id, removeSearchValue, addTextFromDropDown }) => {
  return (
    <Box sx={style.dropdown.item} onClick={() => addTextFromDropDown(text)}>
      <Box sx={style.dropdown.item.wr}>
        <ScopeIcon />
        {text}
      </Box>
      <Box sx={style.dropdown.item.delite} onClick={() => removeSearchValue(id)}>
        Удалить
      </Box>
    </Box>
  );
};

export default memo(SearchDropdownItem);

SearchDropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeSearchValue: PropTypes.func.isRequired,
  addTextFromDropDown: PropTypes.func.isRequired,
};

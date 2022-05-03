import React from 'react';
import useFind from './logic/useFind';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import style from './style/style';

import ArrowIcon from '../../assets/ArrowIcon';
import SearchDropdown from './SearchDropdown';

const SearchInput = () => {
  const {
    value,
    inputRef,
    searchValues,
    showDropdown,
    onChangeValue,
    changeIsOpen,
    removeSearchValue,
    addTextFromDropDown,
  } = useFind();
  return (
    <ClickAwayListener onClickAway={changeIsOpen}>
      <Box sx={style}>
        <Input
          ref={inputRef}
          value={value}
          onChange={(event) => onChangeValue(event.target.value)}
          sx={style.inputs}
          startAdornment={
            <InputAdornment position="start" disablePointerEvents={false}>
              <Box sx={style.icon} onClick={changeIsOpen}>
                <ArrowIcon />
              </Box>
            </InputAdornment>
          }
          placeholder="Поиск"
        />
        {showDropdown && (
          <SearchDropdown
            searchValues={searchValues}
            removeSearchValue={removeSearchValue}
            addTextFromDropDown={addTextFromDropDown}
          />
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default SearchInput;

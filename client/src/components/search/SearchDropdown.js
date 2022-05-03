import React, { memo, lazy, Suspense } from 'react';
const SearchDropdownItem = lazy(() => import('./SearchDropdownItem'));
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import style from './style/style';

const SearchDropdown = ({ searchValues, removeSearchValue, addTextFromDropDown }) => {
  const Plug = () => {
    return <Skeleton sx={{ bgcolor: 'grey.800', marginBottom: '5px' }} variant="rectangular" width={800} height={48} />;
  };
  return (
    <Box sx={style.dropdown}>
      <Suspense fallback={Plug()}>
      {searchValues.map((item) =>  <SearchDropdownItem key={item.id} text={item.text} id={item.id} removeSearchValue={removeSearchValue} addTextFromDropDown={addTextFromDropDown} />)}
      </Suspense>
    </Box>
  );
};

export default memo(SearchDropdown);

SearchDropdown.propTypes = {
    searchValues: PropTypes.array.isRequired,
    removeSearchValue: PropTypes.func.isRequired,
    addTextFromDropDown: PropTypes.func.isRequired,
}
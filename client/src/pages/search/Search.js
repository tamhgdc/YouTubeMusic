import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import SearchItem from '../../components/search/SearchItem';

const Search = () => {
  return (
    <Container sx={{ width: '870px' }}>
      <Box sx={{ fontSize: '20px', color: '#fff', fontWeight: 700, lineHeight: '1.2', margin: '16px 6px' }}>Треки</Box>
      <SearchItem setup={true}/>
      <SearchItem />
      <SearchItem />
    </Container>
  );
};

export default Search;

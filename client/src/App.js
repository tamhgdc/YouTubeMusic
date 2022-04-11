import React from 'react';
import Box from '@mui/material/Box';

import Player from './components/player/Player';
import Header from './components/header/Header';
import List from './components/list/List';

function App() {
  return (
    <Box>
      <Header />
      <List />
      <Player />
    </Box>
  );
}

export default App;

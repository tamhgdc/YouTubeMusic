import React from 'react';
import useIsActiveSong from './hooks/useIsActiveSong';

import Box from '@mui/material/Box';

import Player from './components/player/Player';
import Header from './components/header/Header';
import List from './components/list/List';

function App() {
  const { isActive } = useIsActiveSong();
  return (
    <Box>
      <Header />
      <List />
      {isActive && <Player />}
    </Box>
  );
}

export default App;

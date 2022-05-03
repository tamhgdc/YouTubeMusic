import React from 'react';
import useIsActiveSong from './hooks/useIsActiveSong';

import Box from '@mui/material/Box';

import Player from './components/player/Player';
import Header from './components/header/Header';

import AppRouter from './components/router/AppRouter';

function App() {
  const { isActive } = useIsActiveSong();
  return (
    <Box>
      <Header />
      {/* <List /> */}
      <Box sx={{ marginTop: '100px' }}>
        <AppRouter />
      </Box>
      {isActive && <Player />}
    </Box>
  );
}

export default App;

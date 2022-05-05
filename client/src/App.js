import React, { useEffect } from 'react';
import useIsActiveSong from './hooks/useIsActiveSong';

import Box from '@mui/material/Box';

import Player from './components/player/Player';
import Header from './components/header/Header';

import AppRouter from './components/router/AppRouter';
import { sliders } from './api/sliders-api';

function App() {
  const { isActive } = useIsActiveSong();
  useEffect(() => {
    sliders.getMainSlides();
  }, [])
  return (
    <Box>
      <Header />
      {/* <List /> */}
      <Box >
        <AppRouter />
      </Box>
      {isActive && <Player />}
    </Box>
  );
}

export default App;

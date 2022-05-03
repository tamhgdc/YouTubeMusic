import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddPlayListIcon from '../../assets/AddPlayListIcon';
import MixIcon from '../../assets/MixIcon';

import style from './style/style';

const AlbumHeader = () => {
  return (
    <Box sx={style.header}>
      <img
        style={style.header.image}
        src="https://lh3.googleusercontent.com/BWunsbjjZSXL17sUr_BC3fDHY1VzGii7F2d9-1SJita21KkRa9kWEjCHkImVZsBw1ArMDOfe6jp6N6XS=w1600-h666-p-l90-rj"
      />
      <Container>
        <Box sx={style.about.wr}>
          <Box>
            <img
              style={style.about.img}
              src="https://yt3.ggpht.com/UfVvcj39RIrE16Jqc3pXdkotjHlUDUXl5vH4-D8F8mb3wK6MgYHJOUUvffclcv-uGEr4rFqRSw=s576"
            />
          </Box>
          <Box>
            <Box sx={style.about.title}>Украина – 100 лучших композиций</Box>
            <Box sx={style.about.length}> 100 треков • 5 часов 17 минут </Box>
            <Box>
              <Button sx={style.button} startIcon={<MixIcon />}>
                {' '}
                Перемишать{' '}
              </Button>
              <Button sx={style.buttonTwo} startIcon={<AddPlayListIcon />}>
                {' '}
                Добавить в Библиотеку{' '}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AlbumHeader;

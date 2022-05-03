import * as React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import style from './style/style';
import PlayListIcon from '../../assets/PlayListIcon';
const SearchItemSetup = () => {
  return (
    <Box sx={style.item.setup}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PlayListIcon />
            </ListItemIcon>
            <ListItemText primary="Добавить в плейлист" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Поделиться" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SearchItemSetup;

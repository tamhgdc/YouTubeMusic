import React, { memo } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import style from './style/style';

import PlayListIcon from '../../assets/PlayListIcon';
import ShareIcon from '../../assets/ShareIcon';

const SearchItemSetup = ({ handlerVisible }) => {
  return (
    <ClickAwayListener onClickAway={handlerVisible}>
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
              <ListItemIcon>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText primary="Поделиться" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </ClickAwayListener>
  );
};

export default memo(SearchItemSetup);

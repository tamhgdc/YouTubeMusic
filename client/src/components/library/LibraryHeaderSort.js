import React, { useState } from 'react';

import { Box, ClickAwayListener } from '@mui/material';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import style from './style/style';

const data = [{ name: 'Сначала новые' }, { name: 'От А до Я' }, { name: 'От Я до А' }];

const LibraryHeaderSort = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [current, setCurrent] = useState(0);
  return (
    <Box sx={style.header.chip}>
      <Chip sx={style.header.chip.item} onClick={() => setShowDropDown(true)} label={data[current].name} />
      {showDropDown && (
        <ClickAwayListener onClickAway={() => setShowDropDown(false)}>
          <List sx={style.header.chip.item.list}>
            {data.map((item, key) => {
              return (
                <ListItem key={key} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      setCurrent(key);
                      setShowDropDown(false);
                    }}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              );
            }, [])}
          </List>
        </ClickAwayListener>
      )}
    </Box>
  );
};

export default LibraryHeaderSort;

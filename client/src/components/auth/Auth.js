import { Button, ClickAwayListener } from '@mui/material';
import { Box } from '@mui/system';
import Popover from '@mui/material/Popover';
import Input from '@mui/material/Input';

import React from 'react';

import style from './style/style';

const Auth = ({ id, open, anchorEl, onClose }) => {
  return (
    <ClickAwayListener>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={{ top: '10px' }}>
        <Box sx={style.main}>
          <Input
            sx={style.main.input}
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"
            size="small"
            placeholder="Email"
            type="email"
          />
          <Box sx={{ marginBottom: '15px' }} />
          <Input
            sx={style.main.input}
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"
            size="small"
            placeholder="Пароль"
            type="password"
          />
          <Box sx={{ marginBottom: '15px' }} />
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={style.button}>Войти</Button>
          </Box>
        </Box>
      </Popover>
    </ClickAwayListener>
  );
};

export default Auth;

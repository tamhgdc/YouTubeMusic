import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Popover from '@mui/material/Popover';
import Input from '@mui/material/Input';

import style from './style/style';

const Auth = ({ id, open, anchorEl, onClose }) => {
  return (
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
        <Input sx={style.main.input} variant="filled" size="small" placeholder="Email" type="email" />
        <Box sx={style.main.wr} />
        <Input sx={style.main.input} variant="filled" size="small" placeholder="Пароль" type="password" />
        <Box sx={style.main.wr} />
        <Box sx={style.main.footer}>
          <Button sx={style.button}>Войти</Button>
        </Box>
      </Box>
    </Popover>
  );
};

export default Auth;

Auth.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.any,
  onClose: PropTypes.func.isRequired,
};

import React, { memo, lazy, Suspense } from 'react';
const Auth = lazy(() => import('../auth/Auth'));
import PropTypes from 'prop-types';

import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import style from './style/style';

const HeaderButtons = ({ id, onClick, onClose, open, anchorEl }) => {
  return (
    <Box>
      <Button sx={style.enter} aria-describedby={id} onClick={onClick}>
        ВОЙТИ
      </Button>
      <Suspense fallback={<Skeleton sx={{width: '250px', height: '400px'}}/>}>
        <Auth id={id} open={open} anchorEl={anchorEl} onClose={onClose} />
      </Suspense>
    </Box>
  );
};

export default memo(HeaderButtons);

HeaderButtons.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}
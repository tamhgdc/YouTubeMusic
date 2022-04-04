import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { style } from './LeftBar.style'
import UserIcon from '../../assets/UserIcon';

const LeftBar = () => {
  return (
    <Box sx={style}>
        <Button 
            variant="outlined" 
            startIcon={<UserIcon />} 
            sx={style.button}
        />
    </Box>
  )
}

export default LeftBar
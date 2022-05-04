import React from 'react';
import { Button, Container, Input, Modal } from '@mui/material';
import style from './style/style';
import { Box } from '@mui/system';
import MainTitle from '../main/MainTitle';
const LibraryModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style.modal}>
        <MainTitle title={'Новый плейлист'} />
        <Input sx={style.modal.input} type="text" placeholder="Название" />
        <Box sx={{ marginTop: '25px' }} />
        <Input sx={style.modal.input} type="text" placeholder="Описание" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '25px' }}>
          <Button onClick={onClose} sx={{ marginRight: '10px', color: '#fff' }} variant="text">
            Отмена
          </Button>
          <Button variant="contained" sx={{ background: '#fff', color: '#303030', '&:hover': { background: '#fff' } }}>
            Создать
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default LibraryModal;

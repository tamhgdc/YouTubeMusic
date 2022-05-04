import { Container, Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainItem from '../main/MainItem';
import List from '../list/List';

import style from './style/style';
import LibraryModal from './LibraryModal';

const LibraryMain = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();
  const [items, setItems] = useState([]);

  return location.pathname == '/library/playlist' ? (
    <Container sx={{ color: '#fff', display: 'flex' }}>
      <MainItem
        onClick={handleOpen}
        isNotALink={true}
        img={'https://www.gstatic.com/youtube/media/ytm/images/pbg/create-playlist-@210.png'}
        name={'Новый плейлист'}
      />
      <LibraryModal open={open} onClose={handleClose} />
      <MainItem
        img={'https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-songs-@576.png'}
        name={'Понравившееся'}
        author={'Создан автоматически'}
      />
      {items.map((item) => (
        <MainItem img={item.img} name={item.name} author={item.author} />
      ))}
    </Container>
  ) : (
    <>
      <List />
    </>
  );
};

export default LibraryMain;

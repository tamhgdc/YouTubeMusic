import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import style from './style/style';
import ListItem from './ListItem';

import { setActiveSong } from '../../store/slices/initialSlice';
import useActiveSong from './logic/useActiveSong';

const List = () => {
  const dispatch = useDispatch();
  const { data, activeSong } = useSelector((state) => state.initial);
  const { addSong } = useActiveSong()
  return (
    <Container>
      <Box sx={style}>
        {data.map((item) => (
          <ListItem
            img={item.img}
            name={item.name}
            author={item.author}
            album={item.album}
            time={item.time}
            item={item}
            onClick={addSong}
          />
        ))}
      </Box>
    </Container>
  );
};

export default List;

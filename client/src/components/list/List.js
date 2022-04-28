import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import style from './style/style';
import ListItem from './ListItem';

import useActiveSong from './logic/useActiveSong';

const List = () => {
  const { data } = useSelector((state) => state.initial);
  const { addSong } = useActiveSong();
  return (
    <Container>
      <Box sx={style}>
        {data.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
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

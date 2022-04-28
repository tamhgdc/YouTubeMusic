import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import style from './style/style';
import ListItem from './ListItem';

import { setActiveSong } from '../../store/slices/initialSlice';



const List = () => {
  const dispatch = useDispatch()
  const { data, activeSong } = useSelector(state => state.initial)
  console.log(activeSong);
  const addToActiveSong = useCallback((obj) => {
    dispatch(setActiveSong(obj))
  }, [dispatch])
  return (
    <Container>
      <Box sx={style}>
        {data.map((item) => (
          <ListItem img={item.img} name={item.name} author={item.author} album={item.album} time={item.time} item={item} onClick={addToActiveSong} />
        ))}
      </Box>
    </Container>
  );
};

export default List;

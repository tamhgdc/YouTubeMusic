import React, { useEffect } from 'react';

import { Box } from '@mui/system';
import { Container } from '@mui/material';

import style from './style/style';
import MainSlider from './MainSlider';
import { useDispatch, useSelector } from 'react-redux';
import { getMainSlides } from '../../store/slices/sliderSlice';

const data = [
  {
    id: 1,
    img: 'https://lh3.googleusercontent.com/kw0dTlQG6YVZ7lO_RPR9hYA-hCmIznIuEFA6zPJ-F-6qoZj9RK0vRy4seh6FQ39wNsNZNitt7pXn7oo4=w544-h544-l90-rj',
    name: 'Украинские патриотические песни',
    author: 'Океан Ельзи, Чубай, Тарта',
  },
  {
    id: 2,
    img: 'https://lh3.googleusercontent.com/pVhXfJmB5StacMmJ05rgEGQUeEkOwl4uNMKavT-7qkhiaLcbHtfUOuQS9wrlAX1dqzXgX81ZoEAlbg=w544-h544-l90-rj',
    name: 'Украинский дэнс-поп',
    author: 'Верка Сердючка, DZIDZIO, TIK, Олег Винник',
  },
  {
    id: 3,
    img: 'https://lh3.googleusercontent.com/jpWZkylkLWsW9OheqYdNZSQU03tE3-4QjYO-3oeAV5OFamZIpxjLVtlDp_HSYiS5Y4D_RlQmNrK6oQE=w544-h544-l90-rj',
    name: 'Украинский народные песни',
    author: 'Группа «Экспресс», Тарас Григорьевич Чубай,',
  },
  {
    id: 4,
    img: 'https://lh3.googleusercontent.com/qi8aOMU9IDo-SfA2vEGTQLSyn8N46CRPqNpbkEE48bX0Y1tlpEGJhbaaUj2WzjdN4OTBFbyeznad_A=w544-h544-l90-rj',
    name: 'Рок хиты Украины',
    author: 'Океан Ельзи, Вопли Видоплясова, The Hardkiss, БЕЗ ОБМЕЖЕНЬ',
  },
  {
    id: 5,
    img: 'https://lh3.googleusercontent.com/xSO1nlKCbNopPDEA-h8ESJJ2IDBphXxGqxDYSs52J7cH8c_5A-kq45Oy8pGpn5arzCL5QhMAfGHGDQ=w544-h544-l90-rj',
    name: 'КАЧ',
    author: 'КАЧ KALUSH, Alyona Alyona, Krechet, Skofka',
  },
  {
    id: 6,
    img: 'https://lh3.googleusercontent.com/jpWZkylkLWsW9OheqYdNZSQU03tE3-4QjYO-3oeAV5OFamZIpxjLVtlDp_HSYiS5Y4D_RlQmNrK6oQE=w544-h544-l90-rj',
    name: 'Украинский народные песни',
    author: 'Группа «Экспресс», Тарас Григорьевич Чубай,',
  },
  {
    id: 7,
    img: 'https://lh3.googleusercontent.com/qi8aOMU9IDo-SfA2vEGTQLSyn8N46CRPqNpbkEE48bX0Y1tlpEGJhbaaUj2WzjdN4OTBFbyeznad_A=w544-h544-l90-rj',
    name: 'Рок хиты Украины',
    author: 'Океан Ельзи, Вопли Видоплясова, The Hardkiss, БЕЗ ОБМЕЖЕНЬ',
  },
  {
    id: 8,
    img: 'https://lh3.googleusercontent.com/xSO1nlKCbNopPDEA-h8ESJJ2IDBphXxGqxDYSs52J7cH8c_5A-kq45Oy8pGpn5arzCL5QhMAfGHGDQ=w544-h544-l90-rj',
    name: 'КАЧ',
    author: 'КАЧ KALUSH, Alyona Alyona, Krechet, Skofka',
  },
];

const MainHeader = () => {
  const dispatch = useDispatch();
  const { mainSlider } = useSelector((state) => state.sliders);
  useEffect(() => {
    dispatch(getMainSlides());
  }, [dispatch]);
  console.log(mainSlider);
  return (
    <Box sx={style.header}>
      <Box
        component={'img'}
        style={style.header.image}
        src="https://lh3.googleusercontent.com/rTK0sPEskWiEZUEqFdzpa7k79PE5MS5VG07NmhkGLeJPQYiVok6y53CeiLu2IBWI3PeFD1Gmi0AI4rE=w1440-h806-l90-rj"
      />
      <Container>
        <MainSlider data={mainSlider} title={'Для спокойного утра'} />
      </Container>
    </Box>
  );
};

export default MainHeader;

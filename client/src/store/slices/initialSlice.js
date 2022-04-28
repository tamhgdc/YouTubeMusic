import { createSlice } from '@reduxjs/toolkit';
import src1 from '../../assets/music2.mp4';
import src2 from '../../assets/music1.mp3';
import src3 from '../../assets/music.mp3';

const initialState = {
  data: [
    {
      id: '1',
      img: 'https://lh3.googleusercontent.com/Q71tFea8YK0_rb54F7ptrOdiq-2wKgImpWkHc9nEG_v_k-RqEtKW8XSmhLVOn5Vyz_WuRyQnuEq0UeHDxQ=w120-h120-l90-rj',
      name: 'Мне каждый вечер зажигают свечи...',
      author: 'Владимир Высоцкий',
      album: 'Новый звук',
      time: '2:08',
      src: `${src3}`,
    },
    {
      id: '2',
      img: 'https://lh3.googleusercontent.com/2ovx4TdBFiaceH6MJpNXDaJZM_GlN9bcRF7Z1Zz5r53hQac7OY8xBtEJuZ8k82yNT1jb7GSHWl4i3XAl=w60-h60-l90-rj',
      name: 'Письмо в редакцию телевизионной передач...',
      author: 'Владимир Высоцкий',
      album: 'Шуточные и сатирические песн...',
      time: '4:42',
      src: `${src2}`,
    },
    {
      id: '3',
      img: 'https://lh3.googleusercontent.com/u_sf0iYxpEMZiuI3b_rknEAERnAbEF20ez8EZVPgXPqQ0US0Uvb2SEs-9Sx3jOhA1woo_KKC8S3US4BaVw=w60-h60-l90-rj',
      name: 'Тот, кто раньше с нею был',
      author: 'Владимир Высоцкий',
      album: 'Песни для театра и кино',
      time: '2:57',
      src: `${src1}`,
    },
  ],
  activeSong: {},
  isPlaying: false,
};

export const initialSlice = createSlice({
  name: 'initial',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setEditorState: (state, action) => {
      state.editorState = action.payload;
    },
    setActiveSong: (state, action) => {
      state.activeSong = action.payload;
      state.isPlaying = true;
    },
    setIsPlaying: (state) => {
      if (state.isPlaying) {
        state.isPlaying = false;
      } else {
        state.isPlaying = true;
      }
    },
  },
});

export const { setData, setEditorState, setActiveSong, setIsPlaying } = initialSlice.actions;

export default initialSlice.reducer;

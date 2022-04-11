import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      img: 'https://lh3.googleusercontent.com/Q71tFea8YK0_rb54F7ptrOdiq-2wKgImpWkHc9nEG_v_k-RqEtKW8XSmhLVOn5Vyz_WuRyQnuEq0UeHDxQ=w120-h120-l90-rj',
      name: 'Мне каждый вечер зажигают свечи...',
      author: 'Владимир Высоцкий',
      album: 'Новый звук',
      time: '2:08',
    },
    {
      img: 'https://lh3.googleusercontent.com/2ovx4TdBFiaceH6MJpNXDaJZM_GlN9bcRF7Z1Zz5r53hQac7OY8xBtEJuZ8k82yNT1jb7GSHWl4i3XAl=w60-h60-l90-rj',
      name: 'Письмо в редакцию телевизионной передач...',
      author: 'Владимир Высоцкий',
      album: 'Шуточные и сатирические песн...',
      time: '4:42',
    },
    {
      img: 'https://lh3.googleusercontent.com/u_sf0iYxpEMZiuI3b_rknEAERnAbEF20ez8EZVPgXPqQ0US0Uvb2SEs-9Sx3jOhA1woo_KKC8S3US4BaVw=w60-h60-l90-rj',
      name: 'Тот, кто раньше с нею был',
      author: 'Владимир Высоцкий',
      album: 'Песни для театра и кино',
      time: '2:57',
    },
  ],
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
  },
});

export const { setData, setEditorState } = initialSlice.actions;

export default initialSlice.reducer;

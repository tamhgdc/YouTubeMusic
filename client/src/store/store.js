import { configureStore } from '@reduxjs/toolkit';
import initialSlice from './slices/initialSlice';
import sliderSlice from './slices/sliderSlice';

export const store = configureStore({
  reducer: {
    initial: initialSlice,
    sliders: sliderSlice,
  },
});

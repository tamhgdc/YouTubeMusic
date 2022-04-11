import { configureStore } from '@reduxjs/toolkit';
import initialSlice from './slices/initialSlice';

export const store = configureStore({
  reducer: {
    initial: initialSlice,
  },
});

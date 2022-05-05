import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sliders } from '../../api/sliders-api';


const initialState = {
 mainSlider: [],
 isLoading: false,
};

export const getMainSlides = createAsyncThunk('slides/getMainSlides', async () => {
    const response = await sliders.getMainSlides()
    return response;
})


export const sliderSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getMainSlides.fulfilled, (state, action) => {
        state.isLoading = false;
        state.mainSlider = action.payload;
    });
    builder.addCase(getMainSlides.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(getMainSlides.rejected, (state, action) => {
        state.isLoading = true;
    });
  },
});

// export const { setMount } = sliderSlice.actions;

export default sliderSlice.reducer;
import { instance } from '.';

export const sliders = {
  getMainSlides: async () => {
    const res = await instance.get('/main/mainSlider');
    return res.data;
  },
};

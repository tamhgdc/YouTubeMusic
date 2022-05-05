import React, { memo } from 'react';
import useSlider from './logic/useSlider';
import PropTypes from 'prop-types';

import MainItem from './MainItem';
import MainTitle from './MainTitle';

import { Box } from '@mui/system';

import style from './style/style';

import ArrowIconRight from '../../assets/ArrowIconRight';
import ArrowIconLeft from '../../assets/ArrowIconLeft';

const MainSlider = ({ data, title }) => {
  const { position, maxPosition, slidePrev, slideNext } = useSlider(data);
  return (
    <Box sx={style.header.wr}>
      <MainTitle title={title} />
      <Box sx={style.item.wr}>
        {position > 0 && (
          <Box sx={style.slider.circleL} onClick={slidePrev}>
            <ArrowIconLeft />
          </Box>
        )}
        <Box sx={{ transform: `translate3d(-${position}px, 0px, 0px)`, display: 'flex', transition: 'all .5s ease' }}>
          {data.map((item, key) => (
            <MainItem key={key} id={item._id} img={item.img} name={item.name} author={item.author} />
          ))}
        </Box>
        {position !== maxPosition - 975 && (
          <Box sx={style.slider.circleR} onClick={slideNext}>
            <ArrowIconRight />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default memo(MainSlider);

MainSlider.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

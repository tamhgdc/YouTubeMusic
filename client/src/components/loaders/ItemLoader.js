import React from 'react';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';

const style = {
  borderRadius: '10px',
  bgcolor: 'grey.900',
  text: {
    bgcolor: 'grey.900',
    marginTop: '10px !important',
    second: {
      bgcolor: 'grey.900',
    },
    header: {
      bgcolor: 'grey.900',
      height: '60px',
      marginTop: '80px',
      marginBottom: '16px',
    },
  },
  wr: {
    display: 'flex',
  },
  item: {
    marginRight: '20px',
  },
};

const loaderItemCount = Array(6).fill('');

const ItemLoader = () => {
  return (
    <>
      <Skeleton variant="text" animation="wave" sx={style.text.header} width={280} />
      <Box sx={style.wr}>
        {loaderItemCount.map((_, key) => (
          <Box key={key} sx={style.item}>
            <Skeleton variant="rectangular" width={180} height={180} sx={style} animation="wave" />
            <Skeleton variant="text" animation="wave" sx={style.text} width={180} />
            <Skeleton variant="text" animation="wave" sx={style.text.second} width={90} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ItemLoader;

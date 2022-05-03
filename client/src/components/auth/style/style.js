const style = {
  main: {
    width: '250px',
    background: 'rgb(33, 33, 33)',
    borderRadius: '4px',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '15px 10px',
    input: {
      width: '100%',
      background: 'rgb(33, 33, 33)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      color: '#ffffff80',

      '&::after': {
        content: '""',
        border: 'none',
      },
      '&::before': {
        content: '""',
        border: 'none !important',
      },
    },
    button: {
      background: '#ffffff80',
      padding: '0 16px',
      borderRadius: '2px',
      color: '#030303',
      height: '32px',
      '&:hover': {
        background: '#fff',
      },
    },
  },
};
export default style;

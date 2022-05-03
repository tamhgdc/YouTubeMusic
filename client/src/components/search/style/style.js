const style = {
  position: 'absolute',
  top: '-10px',
  left: '0',
  zIndex: '999',
  background: 'rgb(33, 33, 33)',
  width: '800px',
  height: '48px',
  border: '1px solid #333',
  borderRadius: '2px',
  item: {
    color: '#fff',
    width: 'calc(100% - 15px)',
    height: '81px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 10px',
    boxSizing: 'border-box',
    setup: {
      position: 'absolute',
      right: '0',
      width: '260px',
      background: 'rgb(33, 33, 33)',
      zIndex: '99'
    },
    about: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, .7)',
      marginTop: '6px',
    },
    svg: {
      cursor: 'pointer',
    },
    img: {
      width: '56px',
      height: '56px',
      borderRadius: '3px',
      marginRight: '16px',
    },
  },
  inputs: {
    width: '100%',
    height: '48px',
    outline: 'none',
    color: '#fff',
    padding: '0px 10px',
    boxSizing: 'border-box',
    fontSize: '20px',
    '&::after': {
      border: 'none',
    },
    '&::before': {
      border: 'none !important',
      content: '""',
    },
  },
  icon: {
    cursor: 'pointer',
  },
  dropdown: {
    position: 'absolute',
    padding: '8px 0',
    boxSizing: 'border-box',
    background: 'rgb(33, 33, 33)',
    border: '1px solid #333',
    width: '802px',
    left: '-1px',
    zIndex: '999',
    item: {
      wr: {
        display: 'flex',
        alignItems: 'center',
      },
      delite: {
        marginRight: '20px',
        fontSize: '12px',
        color: '#aaaaa',
        transition: 'all .2s ease',
        '&:hover': {
          color: '#fff',
        },
      },
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      height: '48px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '&:hover': {
        background: 'rgb(56, 56, 56)',
      },
      svg: {
        padding: '0 16px',
        '&:hover': {
          fill: '#fff',
        },
      },
    },
  },
};

export default style;

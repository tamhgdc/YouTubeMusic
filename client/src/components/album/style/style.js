const style = {
  header: {
    padding: '16vh 0 24px',
    background: 'linear-gradient(to bottom,rgba(0,0,0,0.6), #030303)',
    color: '#fff',
    height: '500px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    image: {
      position: 'absolute',
      top: 0,
      zIndex: '-1',
      height: '500px',
      width: '100%',
      backgroundSize: 'cover',
      background: 'no-repeat center center fixed',
    },
  },
  about: {
    wr: {
      display: 'flex',
      aliginItems: 'center',
    },
    title: {
      marginTop: '50px',
      fontWeight: '700',
      fontSize: '24px',
    },
    length: {
      margin: '10px 0px',
      fontSize: '14px',
      color: 'rgba(255, 255, 255, .7)',
    },
    img: {
      width: '240px',
      height: '240px',
      borderRadius: '6px',
      marginRight: '40px',
    },
  },
  button: {
    background: '#fff',
    padding: '0 16px',
    borderRadius: '2px',
    color: '#030303',
    height: '36px',
    marginRight: '20px',
    '&:hover': {
      background: '#fff',
    },
  },
  buttonTwo: {
    padding: '0 16px',
    borderRadius: '2px',
    color: '#fff',
    height: '36px',
    marginRight: '20px',
    border: '1px solid #FFFFFF80',
  },
};

export default style;

export const style = {
    width: '100%',
    height: '64px',
    position: 'fixed',
    bottom: '0',
    left: '0',
    padding: '0 20px',
    boxSizing: 'border-box',
    background: 'rgb(33, 33, 33)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    inputs: {
      position: 'absolute',
      cursor: 'pointer',
      display: 'block',
      top: '-14px',
      left: '-2px',
      width: '100%',
      background: '',
      color: '#ff0100',
      "& * ": {
        transition: 'none !important'
      },
    },
    svg: {
      cursor: 'pointer'
    },
    nav: {
      width: '144px',
      display: 'flex',
      alignItems: 'center'
  
    }, 
    time: {
      display: 'flex',
      color: '#aaaaaa',
      fontSize: '12px',
      marginLeft: '20px',
      alignItems: 'center'
    },
    item: {
      maxWidth: '400px',
      width: '100%',
      display: 'flex',
      img: {
        width: '40px',
        marginRight: '20px',
      },
      about: {
        title: {
          fontWeight: '500',
          color: '#fff',
          fontSize: '14px',
          lineHeight: '1.2'
        },
        author: {
          color: 'rgba(255, 255, 255, .7)',
          fontSize: '13px',
          lineHeight: '1.2'
        }
      }
    },
    manage: {
      display: 'flex',
      alignItems: 'center'
    },
    volume: {
      width: '65px',
      height: '3px',
      marginRight: '20px'
    }
  }
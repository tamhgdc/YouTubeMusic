import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useHeader = () => {
  const [position, setPosition] = useState(0);
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleOpenPopover = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const handleClosePopover = useCallback(() => {
    setAnchorEl(null);
  }, []);
  useEffect(() => {
    const scrollhandler = () => {
      setPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', scrollhandler);
    return () => {
      window, removeEventListener('scroll', scrollhandler);
    };
  }, []);
  return { position, path: location.pathname, anchorEl, id, open, handleOpenPopover, handleClosePopover };
};

export default useHeader;

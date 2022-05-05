import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useLibrary = () => {
  const { pathname } = useLocation();
  const [visibleSort, setVisibleSort] = useState(false);
  const [currentSort, setCurrentSort] = useState(0);
  const handlerVisibleSort = useCallback(() => {
    setVisibleSort(!visibleSort);
  }, [visibleSort]);
  const handlerSelectSort = useCallback((key) => {
    setCurrentSort(key);
    setVisibleSort(false);
  }, []);
  return { pathname, visibleSort, currentSort, handlerVisibleSort, handlerSelectSort };
};

export default useLibrary;

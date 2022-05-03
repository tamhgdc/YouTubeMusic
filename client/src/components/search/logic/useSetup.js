import { useCallback, useState } from 'react';

const useSetup = () => {
  const [visible, setVisible] = useState(false);
  const handlerVisible = useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  return { visible, handlerVisible };
};

export default useSetup;

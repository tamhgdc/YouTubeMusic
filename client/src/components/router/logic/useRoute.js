import { useRoutes } from 'react-router-dom';
import Main from '../../../pages/main/Main';
import Search from '../../../pages/search/Search';

const useRoute = () => {
  // const authRoutes = useRoutes([
  //     { path: '/'}
  // ]);
  const unAuthRoutes = [
    { path: '/', element: <Main /> },
    { path: '/search', element: <Search /> },
  ];
  return { unAuthRoutes };
};

export default useRoute;

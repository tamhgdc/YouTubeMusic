import Album from '../../../pages/album/Album';
import Main from '../../../pages/main/Main';
import Search from '../../../pages/search/Search';

const useRoute = () => {
  // const authRoutes = useRoutes([
  //     { path: '/'}
  // ]);
  const unAuthRoutes = [
    { path: '/', element: <Main /> },
    { path: '/search', element: <Search /> },
    { path: '/album', element: <Album /> },
  ];
  return { unAuthRoutes };
};

export default useRoute;

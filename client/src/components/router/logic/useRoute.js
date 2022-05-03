import Album from '../../../pages/album/Album';
import Library from '../../../pages/library/Library';
import Main from '../../../pages/main/Main';
import Search from '../../../pages/search/Search';

const useRoute = () => {
  // const authRoutes = useRoutes([
  //     { path: '/'}
  // ]);
  const unAuthRoutes = [
    { path: '/', element: <Main /> },
    { path: '/search', element: <Search /> },
    { path: '/album:id', element: <Album /> },
    { path: '/library', element: <Library /> },
  ];
  return { unAuthRoutes };
};

export default useRoute;

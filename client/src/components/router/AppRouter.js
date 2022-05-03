import React from 'react';
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom';
import useRoute from './logic/useRoute';

const AppRouter = () => {
  const { unAuthRoutes } = useRoute();
  return (
    <Routes>
      {/* {authRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} exact />
      ))} */}
      {unAuthRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} exact />
      ))}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default AppRouter;

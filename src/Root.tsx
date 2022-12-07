import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root() {
  return (
    <div>
      hiiiiiiiiii
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;

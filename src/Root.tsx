import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  const fn = (prev: boolean) => {
    setDarkMode((prev) => !prev);
    console.log('Asd');
  };
  return (
    <div>
      <button onClick={() => fn(darkMode)}>
        Now useOutletContext :: {darkMode ? 'DarkMode' : 'LightMode'}
      </button>
      <Header />
      <Outlet context={{ darkMode: darkMode }} />
    </div>
  );
}

export default Root;

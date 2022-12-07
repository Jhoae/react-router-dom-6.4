import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';
import Header from './components/Header';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

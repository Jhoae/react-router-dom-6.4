import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';
import Header from './components/Header';
import Root from './Root';
import NotFound from './screens/NotFound';
import User from './screens/users/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users/:userId',
        element: <User />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

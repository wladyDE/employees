import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';

import { store } from './app/store';
import { Paths } from './paths';
import { Login } from './pages/login';
import { Register } from './pages/register';
import Auth from './features/auth/auth';
import './index.css';

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Auth><h1>Employees</h1></Auth>
  },
  {
    path: Paths.login,
    element: <Login />
  },
  {
    path: Paths.register,
    element: <Register />
  }
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{
        algorithm: theme.darkAlgorithm
      }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import { RouterProvider } from 'react-router';
import router from './Router/Router';
import AuthProvider from './Context/AuthContext/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);

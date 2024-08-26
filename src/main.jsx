import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Calculator from './routes/Calculator.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/symple-calculator',
    element: <App />,
  },
  {
    path: '/symple-calculator/calculator',
    element: <Calculator />
  }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

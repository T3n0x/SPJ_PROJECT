import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter , RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Navar from './Components/Navar/Navar';
import Home from './Pages/Home/Home'
import Auto from './Pages/Auto/Auto';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/auto/:id",
    element: <Auto/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navar/>
    <main onDragStart={() => {return false;}} onDrop={() => {return false;}}>
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);

reportWebVitals();

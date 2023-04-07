import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import About from './components/About/About';
import Service from './components/Service/Service';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tShirts.json')

      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }

    ] 
    
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

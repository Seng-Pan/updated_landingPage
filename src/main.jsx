import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import LandingPage from './pages/LandingPage.jsx';
import Resident from './components/Resident.jsx';
import Login from './components/Login.jsx';
import Result from './components/Result.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<LandingPage/>
  },

  {
    path:'/Login',
    element:<Login/>
  },

  {
    path:'/Resident',
    element:<Resident/>
  },

  {
    path:'/Result',
    element:<Result/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

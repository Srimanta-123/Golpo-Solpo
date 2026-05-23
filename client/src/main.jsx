import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home/Home.jsx'
import  Login from './pages/authentication/Login.jsx'
import  Signup  from './Pages/authentication/Signup.jsx'  


const router = createBrowserRouter([
  { path: '/',
    element: <Home /> },   
  { path: '/login', 
    element: <Login /> },
  { path: '/signup', 
    element: <Signup /> }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <RouterProvider router={router} />
  </>
)
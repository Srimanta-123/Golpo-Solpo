import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/home/Home.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/authentication/Login.jsx'
import Signup from './pages/authentication/Signup.jsx'

import { Provider } from 'react-redux'
import { store } from './store/store.js'
import ProtectedRoute from "./components/ProtectedRoute.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div data-theme="dark">

      <App />
      <RouterProvider router={router} />

    </div>

  </Provider>
)
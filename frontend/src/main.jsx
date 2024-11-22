import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './store/store.js'
import { Provider } from "react-redux"

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<App />}>
    <Route index={true} path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </Route>)
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
)

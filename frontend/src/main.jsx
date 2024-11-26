import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import store from './store/store.js';
import { Provider } from "react-redux"
import PrivateRoute from './components/PrivateRoute.jsx';

//pages
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx';
import CreateMod from "./pages/mod/CreateMod.jsx"
import ViewMod from "./pages/mod/ViewMod.jsx"
import PendingMod from "./pages/mod/PendingMod.jsx"
import ModPage from './pages/mod/ModPage.jsx';
import ApprovedMod from "./pages/mod/ApprovedMod.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index={true} path="/" element={<Home />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Private Routes  */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/create-mod' element={<CreateMod />} />
        <Route path='/dashboard/view-mod' element={<ViewMod />} />
        <Route path='/dashboard/pending-mod' element={<PendingMod />} />
        <Route path='/dashboard/approved-mod' element={<ApprovedMod />} />
        <Route path='/dashboard/mod' element={<ModPage />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
)

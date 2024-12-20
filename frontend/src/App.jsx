import { Outlet } from "react-router-dom"
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"


const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className='my-2'>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default App
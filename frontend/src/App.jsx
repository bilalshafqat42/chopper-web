import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-bootstrap'
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className='my-2'>
        <Outlet />
      </Container>
    </>
  )
}

export default App
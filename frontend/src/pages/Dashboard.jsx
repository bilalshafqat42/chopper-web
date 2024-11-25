import React from 'react'
import Sidebar from "../components/Sidebar"
import { Container, Card, Button } from 'react-bootstrap'

const Dashboard = () => {
    return (
        <Container fluid>
            <Sidebar />
            <div className='text-white'>Dashboard</div></Container>
    )
}

export default Dashboard
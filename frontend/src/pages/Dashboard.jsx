import React from 'react'
import ModPage from './mod/ModPage'
import { Container, Card, Button } from 'react-bootstrap'

const Dashboard = () => {
    return (
        <Container fluid>
            <ModPage />
            <div className='text-white'>Dashboard</div>
        </Container>
    )
}

export default Dashboard
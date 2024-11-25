import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import blackLogo from "../assets/logo.png"

const Hero = () => {
    return (
        <div className='py-5 bg-black'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75 bg-white gap-3'>
                    <img src={blackLogo} width={287} height={211} alt="choppershoot logo" className='bg-white pb-3' />
                    <h3 className='bg-white text-center mb-4'>Aerial Filming Company in Dubai, Abu Dhabi and KSA</h3>
                    <p className='bg-white text-center mb-4'>CHOPPERSHOOT is a Dubai, UAE-based Drone and Helicopter Aerial Filming Company with regional offices in Abu Dhabi and Riyadh. We specialize in Aerial Filming with Helicopters and Drones alike. We have complete in-house equipment and an experienced team of the Best Drone Pilots, FPV Pilots, Gimbal Operators, and Technicians with immaculate safety records. Our dedicated permits department is well-informed about the latest Aerial Filming regulations in the UAE and KSA and the entire permit process and compliance with the Film Commission, Ministry of Defense, and Civil Aviation Authority.</p>
                    <div className='d-flex bg-white'>
                        <LinkContainer to="/login">
                            <Button className='me-3 btn-dark'>Sign In</Button></LinkContainer>
                        <LinkContainer to="/register">
                            <Button className='me-3 bg-white btn-outline-dark'>Register</Button></LinkContainer>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Hero
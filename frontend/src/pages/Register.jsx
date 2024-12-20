import React, { useState, useEffect } from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from "react-toastify"
import Loader from '../components/Loader'
import { useRegisterMutation } from '../store/slices/usersApiSlice'
import { setCredentials } from '../store/slices/authSlice'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth)

    const [register, { isLoading }] = useRegisterMutation()

    useEffect(() => {
        if (userInfo) {
            navigate("/");
        }
    }, [navigate, userInfo])

    const submitHandler = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error("Password do not match")

        } else {
            try {
                const res = await register({ name, email, password }).unwrap();
                dispatch(setCredentials({ ...res }))
                navigate("/register")
            } catch (error) {
                toast.error(err?.data?.message || err.error)
            }
        }
    }
    return (
        <FormContainer>
            <h1>Register</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId='name'>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type='text' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                {isLoading && <Loader />}
                <Button type='submit' variant='primary' className='mt-3'>Sign In</Button>
                <Row className='py-3'>
                    <Col>
                        Already have an account? <Link to="/login">Login Here</Link></Col>
                </Row>
            </Form>
        </FormContainer>
    )
}

export default Register
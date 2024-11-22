import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from "react-bootstrap"
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../store/slices/usersApiSlice'
import { setCredentials } from '../store/slices/authSlice'
import { toast } from "react-toastify"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation()

    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() => {
        if (userInfo) {
            navigate("/")
        }
    }, [navigate, userInfo])


    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await login({ email, password }).unwrap()
            dispatch(setCredentials({ ...res }))
            navigate("/")
        } catch (err) {
            toast.error(err.data.message || err.error)
        }
    }
    return (
        <FormContainer><h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' contolId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Your Email Address' value={email} onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary' className='mt-3'>
                    Sign In
                </Button>
                <Row className='py-3'>
                    <Col>New Customer <Link to={"/register"}>Register</Link></Col>
                </Row>
            </Form>
        </FormContainer>
    )
}

export default Login
import React, { useState, useEffect } from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from "react-toastify"
import Loader from '../components/Loader'
import { useUpdateUserMutation } from '../store/slices/usersApiSlice'
import { setCredentials } from '../store/slices/authSlice'

const Profile = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth)

    const [updateProfile, { isLoading }] = useUpdateUserMutation()

    // useEffect(() => {
    //     setName(userInfo.name)
    //     setEmail(userInfo.email)
    // }, [userInfo.setName, userInfo.setEmail])

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name || ''); // Fallback to empty string in case of undefined
            setEmail(userInfo.email || '');
        }
    }, [userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
        } else {
            try {
                const res = await updateProfile({
                    _id: userInfo._id, // User ID remains the same
                    name, // Updated name from state
                    email, // Updated email from state
                    password: password || undefined, // Optional: only send if a new password is provided
                }).unwrap();
                dispatch(setCredentials({ ...res }));
                toast.success("Profile Updated");
            } catch (error) {
                toast.error(error?.data?.message || error.error);
            }
        }
    };


    return (
        <FormContainer>
            <h1>Update Profile </h1>
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
                <Button type='submit' variant='primary' className='mt-3'>Update Profile</Button>
            </Form>
        </FormContainer>
    )
}

export default Profile
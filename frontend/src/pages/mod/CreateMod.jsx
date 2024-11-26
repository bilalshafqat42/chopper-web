import React, { useState } from 'react'
import ModSidebar from '../../components/mod/ModSidebar'
import FormContainer from '../../components/FormContainer'
import { Form, Button, Row, Col } from 'react-bootstrap';


const CreateMod = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")
    const [area, setArea] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [textArea, setTextArea] = useState("")
    return (
        <div><ModSidebar />
            <div className='position-absolute top-20 end-0 w-75 h-100'>
                <div className='container main-section-dashboard rounded px-5 py-5'>
                    <h1 className='mb-3'>Create Mod</h1>
                    <Form className='card p-4'>
                        <Row className='mb-3'>
                            <Form.Group as={Col} className='my-2' controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='name' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} className="my-2" controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
            </div>
        </div >
    )
}

export default CreateMod
import React, { useState } from 'react';
import ModSidebar from '../../components/mod/ModSidebar';
import FormContainer from '../../components/FormContainer';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const CreateMod = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());
    const [area, setArea] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [textArea, setTextArea] = useState("");
    const [error, setError] = useState(null)

    const handleCreateMod = async (e) => {

        e.preventDefault()

        const mod = { name, email, dateFrom, dateTo, area, companyName, textArea }

        const response = await fetch("/api/mod", {
            method: "POST",
            body: JSON.stringify(mod),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setError(null)
            setName("")
            setEmail("")
            setDateFrom("")
            setDateTo("")
            setArea("")
            setCompanyName("")
            setTextArea("")
            console.log("new mod added", json)
        }
    }

    return (
        <div>
            <ModSidebar />
            <div className='position-absolute top-20 end-0 w-75 h-100'>
                <div className='container main-section-dashboard rounded px-5 py-5'>
                    <h1 className='mb-3'>Create Mod</h1>
                    <Form className='card p-4' onSubmit={handleCreateMod}>
                        <Row className='mb-3'>
                            <Form.Group as={Col} className='my-2' controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Your Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="my-2" controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Your Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col} className='my-2' controlId='date-from'>
                                <Form.Label>Date From</Form.Label>
                                <InputGroup>
                                    <DatePicker
                                        selected={dateFrom}
                                        onChange={(date) => setDateFrom(date)}
                                        className="form-control"
                                        dateFormat="dd/MM/yyyy"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} className='my-2' controlId='date-to'>
                                <Form.Label>Date To</Form.Label>
                                <InputGroup>
                                    <DatePicker
                                        selected={dateTo}
                                        onChange={(date) => setDateTo(date)}
                                        className="form-control"
                                        dateFormat="dd/MM/yyyy"
                                        minDate={dateFrom} // Prevent selecting a date earlier than `dateFrom`
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col} className="my-2" controlId="area">
                                <Form.Label>Area</Form.Label>
                                <Form.Control
                                    type='area'
                                    placeholder='area'
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="my-2" controlId="company-name">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control
                                    type='companyName'
                                    placeholder='Company Name'
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group className="my-2" controlId="text-area">
                                <Form.Label>Text Area</Form.Label>
                                <Form.Control
                                    as='textArea'
                                    rows={3}
                                    placeholder='Text Area'
                                    value={textArea}
                                    onChange={(e) => setTextArea(e.target.value)}
                                />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default CreateMod;

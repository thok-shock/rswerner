import React from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';

export default class AddProjectModal extends React.Component {
    constructor(props) {
        super(props)
        
        this.createProject = this.createProject.bind(this)
    }

    createProject() {
        this.props.createProject(new FormData(document.getElementById('create-form')))
    }

    test() {
        const form = new FormData(document.getElementById('create-form'))
        console.log(form)
    }

    render() {
        return <Modal show={this.props.show} onHide={this.props.close} className='black-text'>
            <Modal.Header>
                <Modal.Title>
                    Add Project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form action='/projects' method='post' encType="multipart/form-data" id='create-form' name='create-form'> 
                    <Form.Group controlId='title'>
                        <Form.Label>Project Title</Form.Label>
                        <Form.Control maxLength='120' name='title' required></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='description'>
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control maxLength='400' as='textarea' name='description' required></Form.Control>
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col} controlId='status'>
                        <Form.Label>Status</Form.Label>
                        <Form.Control as='select' name='status' required>
                            <option value='Planned'>Planned</option>
                            <option value='In Development'>In Development</option>
                            <option value='Completed'>Completed</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId='projectDate'>
                        <Form.Label>Project Date</Form.Label>
                        <Form.Control type='date' name='projectDate' required></Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId='file'>
                        <Form.Label>Project Photo</Form.Label>
                        <Form.Control type='file' name='file' required></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId='keywords'>
                        <Form.Label>Keywords</Form.Label>
                        <Form.Control name='keywords' required></Form.Control>
                        <Form.Text>Separate keywords by space</Form.Text>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId='secretCode'>
                        <Form.Label>Security Code</Form.Label>
                        <Form.Control name='secretCode' required></Form.Control>
                        <Form.Text>Did you really think I'd let you upload things to my site?</Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId='link'>
                        <Form.Label>Link</Form.Label>
                        <Form.Control name='link' required></Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <Button variant='success' onClick={this.createProject}>Submit</Button>
                    <Button variant='outline-danger' className='ml-2' onClick={this.props.close}>Cancel</Button>
                </Form>
            </Modal.Body>
        </Modal>
    }
}
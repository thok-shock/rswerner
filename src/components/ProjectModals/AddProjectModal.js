import React from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';

export default class AddProjectModal extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return <Modal show={this.props.show} onHide={this.props.close}>
            <Modal.Header>
                <Modal.Title>
                    Add Project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='title'>
                        <Form.Label>Project Title</Form.Label>
                        <Form.Control maxLength='120'></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='description'>
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control maxLength='400' as='textarea'></Form.Control>
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col} controlId='status'>
                        <Form.Label>Status</Form.Label>
                        <Form.Control as='select'>
                            <option value='Planned'>Planned</option>
                            <option value='In Development'>In Development</option>
                            <option value='Completed'>Completed</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId='projectDate'>
                        <Form.Label>Project Date</Form.Label>
                        <Form.Control type='date'></Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId='file'>
                        <Form.Label>Project Photo</Form.Label>
                        <Form.Control type='file'></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Keywords</Form.Label>
                        <Form.Control></Form.Control>
                        <Form.Text>Separate keywords by space</Form.Text>
                    </Form.Group>
                    </Form.Row>
                    <Button variant='success'>Submit</Button>
                    <Button variant='outline-danger' className='ml-2' onClick={this.props.close}>Cancel</Button>
                </Form>
            </Modal.Body>
        </Modal>
    }
}
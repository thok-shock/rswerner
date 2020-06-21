import React from 'react'
import { render } from 'react-dom';
import { Modal, Form, Col, Button } from 'react-bootstrap';

export default class EditProjectModal extends React.Component {
    constructor(props) {
        super(props);
        
        this.modifyProject = this.modifyProject.bind(this)
        this.deleteProject = this.deleteProject.bind(this)
    }

    modifyProject() {
        let data = new FormData(document.getElementById('form'))
        data.append('projectID', this.props.project.projectID)
        this.props.modifyProject(data)
        this.props.hide()
    }

    deleteProject() {
        if (!document.getElementById('secretCode').value) {
            alert('Please enter secret code field to delete')
            return;
        }
        this.props.deleteProject(this.props.project.projectID, document.getElementById('secretCode').value)
        this.props.hide()

    }


    render() {
        return <Modal show={this.props.show} onHide={this.props.hide} className='black-text'>
            <Modal.Header>
                <Modal.Title>Edit Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form name='form' id='form'>
                <Form.Group controlId='title'>
                        <Form.Label>Project Title</Form.Label>
                        <Form.Control maxLength='120' name='title' required defaultValue={this.props.project.title}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='description'>
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control maxLength='400' as='textarea' name='description' required defaultValue={this.props.project.description}></Form.Control>
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col} controlId='status'>
                        <Form.Label>Status</Form.Label>
                        <Form.Control as='select' name='status' required defaultValue={this.props.project.status}>
                            <option value='Planned'>Planned</option>
                            <option value='In Development'>In Development</option>
                            <option value='Completed'>Completed</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId='projectDate'>
                        <Form.Label>Project Date</Form.Label>
                        <Form.Control type='date' name='projectDate' required defaultValue={this.props.project.projectDate}></Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId='file'>
                        <Form.Label>Project Photo</Form.Label>
                        <Form.Control type='file' name='file' required></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId='keywords'>
                        <Form.Label>Keywords</Form.Label>
                        <Form.Control name='keywords' required defaultValue={this.props.project.keywords}></Form.Control>
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
                        <Form.Control name='link' required defaultValue={this.props.project.link}></Form.Control>
                    </Form.Group>
                    </Form.Row>
                </Form>
                <Button size='sm' type='button' className='m-1' onClick={this.modifyProject}>Submit</Button>
                <Button size='sm' type='button' className='m-1' onClick={this.deleteProject}>Delete</Button>
            </Modal.Body>
        </Modal>
    }
}
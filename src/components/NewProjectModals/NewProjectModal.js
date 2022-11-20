import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'

export default function NewProjectModal(props) {
    const [projectDets, setProjectDets] = useState({})

    function updateProj(e) {
        const newProj = JSON.parse(JSON.stringify(projectDets))
        newProj[e.target.id] = e.target.value
        setProjectDets(newProj)
    }

    return <Modal show={props.show} onHide={props.onHide} style={{color: 'black'}}>
        <Modal.Header>Manage Project</Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId='title'>
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control maxLength='120' value={projectDets.title} onChange={updateProj}></Form.Control>
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control maxLength='400' as='textarea' value={projectDets.description} onChange={updateProj}></Form.Control>
                    <Form.Text>{projectDets.description ? 400 - parseInt(projectDets.description.toString().length) : 400} characters remaining</Form.Text>
                </Form.Group>
                <Form.Row>
                <Form.Group controlId='status'>
                    <Form.Label>Status</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                </Form.Row>
                
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={props.onHide}>Cancel</Button>
            <Button>Submit</Button>
        </Modal.Footer>
    </Modal>
}
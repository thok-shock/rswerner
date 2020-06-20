import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return <Card className='w-24 shadow m-3 project'>
            <Card.Img variant='top' className='project-image' src={'./upload/' + this.props.project.imageLink}></Card.Img>
            <Card.Body>
                <Card.Title className='mb-0'>{this.props.project.title}</Card.Title>
    <a className='font-weight-light mb-5' href={this.props.project.link}>{this.props.project.link}</a>
                <Card.Text className='mt-3'>{this.props.project.description}</Card.Text>
                <div className='d-flex flex-row-reverse'>
                <Button variant='outline-success' size='sm' className='align-self-right'>Upvote</Button>
                </div>
            </Card.Body>
        </Card>
    }
}
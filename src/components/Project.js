import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import EditProjectModal from "./ProjectModals/EditProjectModal";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showEditModal: false
    };
    this.openEditModal = this.openEditModal.bind(this)
    this.closeEditModal = this.closeEditModal.bind(this)
    this.determineDisplayUpvoteButton = this.determineDisplayUpvoteButton.bind(this)
    this.createVote = this.createVote.bind(this)
  }

  determineColors() {
    switch (this.props.project.status) {
      case "Completed":
        return "status-green";
        break;
      case "In Development":
        return "status-yellow";
        break;
      case "Planned":
        return "status-blue";
        break;
    }
  }

  openEditModal() {
      this.setState({showEditModal: true})
  }

  closeEditModal() {
      this.setState({showEditModal: false})
  }

  determineShowEditButton() {
    if (this.props.admin) {
      return (
        <Button variant="outline-warning" onClick={this.openEditModal} size='sm' className='m-1'>
          Edit
        </Button>
      );
    }
  }

  createVote() {
      this.props.createVote(this.props.project.projectID);
  }

  determineDisplayUpvoteButton() {
      if (this.props && this.props.voted) {
          return <Button variant='outline-success' size='sm' disabled className="align-self-right m-1">
              Voted!
          </Button>
      } else {
        return <Button
        variant="outline-success"
        size="sm"
        className="align-self-right m-1"
        onClick={this.createVote}
      >Upvote
      </Button>
      }
  }

  

  render() {
    return (
      <Card className="w-24 shadow m-3 project">
        <Card.Img
          variant="top"
          className="project-image"
          src={"./upload/" + this.props.project.imageLink}
        ></Card.Img>
        <div className={"status-area " + this.determineColors()}>
          {this.props.project.status}
        </div>
        <Card.Body className='d-flex flex-column justify-content-between'>
          <div>
            <Card.Title className="mb-0">{this.props.project.title}</Card.Title>
            <a
              className="font-weight-light mb-5"
              href={this.props.project.link}
            >
              {this.props.project.link}
            </a>

            <Card.Text className="mt-3">
              {this.props.project.description}
            </Card.Text>
          </div>
          <div className="d-flex flex-row-reverse">
            {this.determineShowEditButton()}
            {this.determineDisplayUpvoteButton()}
            <div className='my-auto' variant='success'>
            <Badge variant='success' className='my-auto pt-1'>{this.props.project.numVotes}  <span fill='green' className="oi oi-thumb-up mb-1" alt='upvote'></span></Badge>
                
            </div>
            
          </div>
        </Card.Body>
        <EditProjectModal modifyProject={this.props.modifyProject} deleteProject={this.props.deleteProject} hide={this.closeEditModal} project={this.props.project} show={this.state.showEditModal}/>
      </Card>
    );
  }
}

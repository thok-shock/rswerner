import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import AddProjectModal from './ProjectModals/AddProjectModal'
import ProjectList from "./ProjectList";

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        addProjectModalOpen: false,
        projects: []
    }

    this.closeProjectModal = this.closeProjectModal.bind(this)
    this.openProjectModal = this.openProjectModal.bind(this)
}



componentDidMount() {
    fetch('/projects', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (!res && res.status != 200) {
            throw('Internal Server Error')
        } else {
            return res.json()
        }
    })
    .then(res => {
        this.setState({
            projects: res
        })
    })
    .catch(err => {
        alert('Something went wrong')
        console.log(err)
    })
}

openProjectModal() {
    this.setState({
        addProjectModalOpen: true
    })
}

closeProjectModal() {
    this.setState({
        addProjectModalOpen: false
    })
}

determineRenderAddProjectButton() {
    if (this.props && this.props.admin) {
        return <Button onClick={this.openProjectModal} className='ml-2' variant='outline-success'>Add Project</Button>
    } else {
        return null;
    }
}
smoothScroll(target) {
    var scrollContainer = target;
    console.log(scrollContainer)
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}



  //https://coolors.co/252323-70798c-f5f1ed-dad2bc-a99985

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md={12} className="text-center m-auto p-0">
              <video muted autoPlay loop width='100%' src='./img/ryan-preview.mp4' type='video/mp4'>
              </video>
              <div className="p-5 center-over-video tertiary-gray shadow">
                <h1 className="display-3 font-weight-normal title-text">Ryan S Werner</h1>
                <p className="text-muted font-weight-light">
                  Student Pharmacist, Web Dev, Cameraman, Luna Enthusiast . . .
                </p>
                <div>
                  <Button className="m-2" variant="outline-primary" onClick={e => {this.smoothScroll(document.getElementById('who-am-i'))}}>
                    Get to Know Me
                  </Button>
                  <Button className="m-2" variant="outline-primary" onClick={e => {this.smoothScroll(document.getElementById('portfolio'))}}>
                    See What I've Done
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="primary-gray" id='who-am-i'>
            <Col md={12} className='mb-5'>
              <div className="text-center">
                <h1 className="m-5 text-underline" >Who Am I?</h1>
              </div>
              <div className="m-auto">
                <div className="d-flex flex-row flex-overflow justify-content-center">
                  <div className="flex-column m-3">
                    <ul className="who-am-i">
                      <li>Student Pharmacist at UW-Madison</li>
                      <li>Sr. WiscIT Student Lead, DoIT Help Desk</li>
                      <li>Founder of intraBurst LLC</li>
                    </ul>
                  </div>
                  <div className="flex-column m-3">
                    <ul className="who-am-i">
                      <li>Experienced Javascript Web Developer</li>
                      <li>Operations and Technology Management Specialist</li>
                      <li>Avid Musician and Luna Wrangler</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="about-paragraphs m-auto">
                    Hi! I'm Ryan, a second year Doctor of Pharmacy Student at
                    UW-Madison looking to upgrade information technology
                    solutions to a modern standard, improving both patient
                    satisfaction and accessibility. Web Applications are the
                    future - that's why I'm building the inventory systems, user
                    interfaces, back-end servers, application programming
                    interfaces, and websites of the future.
                  </p>
                </div>
                <div className='mt-5'>
                <p className="about-paragraphs m-auto">
                    If we haven't met in person, my personality can best be
                    described as Leslie Knope meets Elon Musk - positive with a
                    creative spirit! Don't hesitate to upvote my favorite dog while you're here.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='tertiary-gray' id='portfolio'>
            <Col>
            <div className='m-5 text-center'>
            <h1>My Portfolio</h1>
            <p className='text-muted font-weight-light'>Feel free to browse through a selection of my projects</p>
            </div>
            <Form className='m-auto'>
                <Form.Row className='m-auto justify-content-center'>
                <Form.Group controlId='search'>
                    <Form.Control></Form.Control>
                    
                </Form.Group>
                <Form.Group >
                <Button className='ml-2'>Search</Button>
                {this.determineRenderAddProjectButton()}
                </Form.Group>
                </Form.Row>
            </Form>
            <ProjectList projects={this.state.projects} />
            </Col>
          </Row>
        </Container>
        <AddProjectModal show={this.state.addProjectModalOpen} close={this.closeProjectModal}/>
      </div>
    );
  }
}

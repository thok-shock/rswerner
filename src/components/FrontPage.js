import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  //https://coolors.co/252323-70798c-f5f1ed-dad2bc-a99985

  render() {
    return (
      <div>
        <Container fluid className="clear-padding-left">
          <Row>
            <Col md={4} className="pr-0">
              <img
                className="top-img max-vh"
                src="./src/img/ryan_bucky.jpg"
              ></img>
            </Col>
            <Col md={8} className="text-center m-auto">
              <div className="p-5">
                <h1 className="display-3 font-weight-normal">Ryan S Werner</h1>
                <p className="text-muted font-weight-light">
                  Student Pharmacist, Web Dev, Cameraman, Luna Enthusiast . . .
                </p>
                <div>
                  <Button className="m-2" variant="outline-primary">
                    Get to Know Me
                  </Button>
                  <Button className="m-2" variant="outline-primary">
                    See What I've Done
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="primary-gray">
            <Col md={12} className='mb-5'>
              <div className="text-center">
                <h1 className="m-5 text-underline">Who Am I?</h1>
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
          <Row className='tertiary-gray'>
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
                </Form.Group>
                </Form.Row>
                
            </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

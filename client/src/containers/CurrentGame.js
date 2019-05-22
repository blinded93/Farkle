import React, { Component } from 'react'
import { Navbar, Button, Container, Card, Accordion, Row, Col } from 'react-bootstrap'

export default class CurrentGame extends Component {
  state = {
    
  }
  
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xl={2}  lg={2} md={1} xs={0}></Col>
            <Col className='sm-game-left' xl={1} lg={1} md={2} sm={2} xs={3}>
              {
                ['one', 'two', 'three', 'four', 'five', 'six'].map(num => (
                  <Row>
                    <i style={{ 'font-size': '500%' }} className={`fas fa-dice-${num}`} />
                  </Row>
                ))
              }
            </Col>
            <Col xl={7} lg={7} md={8} sm={8} xs={8}>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Click me!
                </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click me!
                </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Container>
        <Navbar fixed='bottom'
          expand='sm'
          bg='dark'
          variant='dark'>
          <Button style={{ width: '45%' }} variant="outline-success">Search</Button>
          <Button style={{ width: '45%' }} variant="outline-success">Search</Button>
        </Navbar>
      </>
    )
  }
}
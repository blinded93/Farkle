import React from 'react'
import { Row, Col, Accordion, Card } from 'react-bootstrap'
import Buttons from './Buttons'

const DesktopBoard = props => {
  return (
    <>
      <Row>
        <Col xl={2} lg={2} md={1} sm={1} xs={0}></Col>
        <Col className='sm-game-left' xl={1} lg={1} md={2} sm={2} xs={3}>
          {
            ['one', 'two', 'three', 'four', 'five', 'six'].map((num, key) => (
              <Row key={key}>
                <i style={{ 'fontSize': '600%' }} className={`fas fa-dice-${num}`} />
              </Row>
            ))
          }
        </Col>
        <Col xl={7} lg={7} md={8} sm={8} xs={8} className='ml-3'>
          <h4 className='text-danger'>Turn Score: 0</h4>
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
          <div className='mt-4 d-flex justify-content-between'>
            <Buttons />
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </>
  )
}

export default DesktopBoard
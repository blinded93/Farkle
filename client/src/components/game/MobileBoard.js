import React from 'react'
import { Row, Col, Accordion, Card, Table } from 'react-bootstrap'

const MobileBoard = props => {
  const { height } = props

  return (
    <>
      <Row>
        <Col></Col>
        {
          ['one', 'two', 'three'].map((num, key) => (
            <Col key={key}>
              <i style={{ 'fontSize': '500%' }} className={`fas fa-dice-${num}`} />
            </Col>
          ))
        }
        <Col></Col>
      </Row>
      <Row className='mt-3'>
        <Col></Col>
        {
          ['four', 'five', 'six'].map((num, key) => (
            <Col key={key + 3}>
              <i style={{ 'fontSize': '500%' }} className={`fas fa-dice-${num}`} />
            </Col>
          ))
        }
        <Col></Col>
      </Row>
      <Row className='mt-3'>
        <Col>
        <h4 className='text-danger'>Turn Score: 0</h4>
          <Accordion defaultActiveKey="0">
            <Card style={{ height: `500`}}>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Kyle
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Table  size='sm'>
                    <tbody>
                      <tr>
                        <td>550</td><td></td>
                      </tr>
                      <tr>
                        <td>700</td><td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Montie
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>

                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </>
  )
}

export default MobileBoard
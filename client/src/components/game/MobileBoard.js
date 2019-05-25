import React from 'react'
import { Row, Col, Accordion, Card, Table, Navbar, Tabs, Tab } from 'react-bootstrap'
import Buttons from './Buttons'

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
          <Tabs defaultActiveKey="player1" id="uncontrolled-tab-example">
            <Tab eventKey="player1" title="Player 1">
              <Table borderless size='sm' className='mt-2'>
                <tbody>
                  <tr>
                    <td>550</td>
                  </tr>
                  <tr>
                    <td>700</td>
                  </tr>
                  <tr>
                    <td></td><td></td><td className='text-right'>Total:1250</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab className='text-success' eventKey="player2" title="Player 2">
              
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Navbar fixed='bottom'
        expand='sm'
        bg='dark'
        variant='dark'>
        <Buttons />
      </Navbar>
    </>
  )
}

export default MobileBoard
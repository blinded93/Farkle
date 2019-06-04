import React from 'react'
import { Row, Col, Navbar } from 'react-bootstrap'
import Buttons from './Buttons'
import Scorecard from './Scorecard'
import { connect } from 'react-redux'
import Dice from './Dice'

const MobileBoard = props => {
  const { currentGame, scorecards, dice } = props
  const showDice = (start, end) => (
    Object.values(dice).slice(start, end).map((num, key) => (
      <Col key={key + start}>
        <Dice num={num} id={`dice-${key + 1 + start}`} />
      </Col>
    ))
  )

  return (
    <>
      <Row>
        <Col></Col>
        { showDice(0, 3) }
        <Col></Col>
      </Row>
      <Row className='mt-3'>
        <Col></Col>
        { showDice(3) }
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

const mapStateToProps = state => ({ dice: state.turn.dice })

export default connect(mapStateToProps)(MobileBoard)
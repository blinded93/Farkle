import React from 'react'
import { Row, Col, Navbar } from 'react-bootstrap'
import Buttons from './Buttons'
import Scorecard from './Scorecard'
import { connect } from 'react-redux'
import Dice from './Dice'
import Score from './Score'

const MobileBoard = props => {
  const { currentGame, dice, diceState } = props
  const showDice = (start, end) => (
    Object.values(dice).slice(start, end).map((num, key) => (
      <Col key={key + start}>
        <Dice diceState={diceState[key]} num={num} id={`dice-${key + start}`} />
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
          <Score />
          <Scorecard />
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

const mapStateToProps = state => ({
  dice: state.turn.dice,
  diceState: state.turn.diceState
})

export default connect(mapStateToProps)(MobileBoard)
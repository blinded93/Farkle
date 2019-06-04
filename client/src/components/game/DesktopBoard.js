import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Buttons from './Buttons'
import Scorecard from './Scorecard'
import Dice from './Dice'
import { connect } from 'react-redux'

const DesktopBoard = props => {
  const { currentGame, scorecards, dice } = props
  const showDice = () => (
    dice.map((num, key) => (
      <Row key={key}>
        <Dice num={num} id={`dice-${key + 1}`} />
      </Row>
    ))
  )

  return (
    <>
      <Row>
        <Col xl={2} lg={2} md={1} sm={1} xs={0}></Col>
        <Col className='sm-game-left' xl={1} lg={1} md={2} sm={2} xs={3}>
          { showDice() }
        </Col>
        <Col xl={7} lg={7} md={8} sm={8} xs={8} className='ml-3'>
          <h4 className='text-danger'>Turn Score: 0</h4>
          <Scorecard
            scorecards={scorecards} />
          <div className='mt-3 d-flex justify-content-between'>
            <Buttons />
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </>
  )
}

const mapStateToProps = state => ({ dice: state.turn.dice })

export default connect(mapStateToProps)(DesktopBoard)
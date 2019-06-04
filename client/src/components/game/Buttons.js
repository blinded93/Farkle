import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { rollDice, bankScore } from '../../actions/turn'

const Buttons = props => {
  const { rollDice, bankScore, dice, selectedDiceIndexes } = props
  const handleRoll = (dice, indexes) => { rollDice(dice, indexes) }
  const handleBank = () => { bankScore() }

  return (
    <>
      <Button
        onClick={e => handleRoll(dice, selectedDiceIndexes)}
        style={{ width: '47%' }}
        variant="outline-success">
          Roll
      </Button>
      <Button
        onClick={e => handleBank()}
        style={{ width: '47%' }}
        variant="outline-danger">
          Bank
      </Button>
    </>
  )
}

const mapStateToProps = state => ({
  dice: state.turn.dice,
  selectedDiceIndexes: state.turn.selectedDiceIndexes
})

export default connect(mapStateToProps, { rollDice, bankScore })(Buttons)
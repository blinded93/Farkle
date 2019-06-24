import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { rollDice, bankScore, updateTotal } from '../../actions/turn'
import RollBtn from './RollBtn'

const Buttons = props => {
  const { bankScore, dice, selectedDiceIndexes, rollCount, updateTotal } = props
  const handleBank = () => { bankScore() }

  return (
    <>
      <RollBtn updateTotal={updateTotal} />
      <Button
        onClick={e => handleBank()}
        style={{ width: '47%' }}
        variant="outline-danger">
        {/* // disabled={handleBankDisable()}> */}
          Bank
      </Button>
    </>
  )
}

const mapStateToProps = state => {
  const { selectedDiceIndexes, savedDice } = state.turn

  return {
    rollCount: state.turn.rollCount,
    dice: state.turn.dice,
    selectedDiceIndexes: [
      ...new Set([ ...selectedDiceIndexes, ...savedDice ])
    ]
  }
}

export default connect(mapStateToProps, { bankScore, updateTotal })(Buttons)
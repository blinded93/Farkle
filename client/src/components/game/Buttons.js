import React from 'react'
import { connect } from 'react-redux'
import RollBtn from './RollBtn'
import BankBtn from './BankBtn'

const Buttons = props => {
  return (
    <>
      <RollBtn />
      <BankBtn  />
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

export default connect(mapStateToProps)(Buttons)
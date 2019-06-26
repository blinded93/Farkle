import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { checkForScore } from '../../logic/game'
import { updateScore, farkle } from '../../actions/turn'

const Score = props => {
  const { finalDice, selectedDiceIndexes, selectedScore, totalScore, updateScore } = props
  
  useEffect(() => {
    const diceFromIndexes = indexes => indexes.map(i => finalDice[i])

    if (finalDice[0]) {
      updateScore(checkForScore(diceFromIndexes(selectedDiceIndexes)))
    }
  }, [updateScore, selectedDiceIndexes, finalDice])

  return (
    <>
      <h4 className='text-danger'>Turn Score: {selectedScore + totalScore}</h4>
    </>
  )
}

const mapStateToProps = ({ turn }) => {
  return {
    finalDice: turn.finalDice,
    unsavedDice: turn.unsavedDice,
    selectedDiceIndexes: turn.selectedDiceIndexes,
    savedDice: turn.savedDice,
    selectedScore: turn.selectedScore,
    totalScore: turn.totalScore
  }
  
}

export default connect(mapStateToProps, { updateScore, farkle })(Score)
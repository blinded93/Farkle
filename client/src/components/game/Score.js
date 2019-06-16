import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { checkForScore } from '../../logic/game'
import { updateScore, farkle } from '../../actions/turn'

const Score = props => {
  const { finalDice, selectedDiceIndexes, unsavedDice, savedDice, selectedScore, totalScore, updateScore, farkle } = props
  const diceFromIndexes = indexes => indexes.map(i => finalDice[i])

  useEffect(() => {
    if (finalDice[0]) {
      console.log(savedDice, selectedDiceIndexes, selectedScore, totalScore)
      updateScore(checkForScore(diceFromIndexes(selectedDiceIndexes)))
    }
  }, [updateScore, farkle, selectedDiceIndexes, finalDice])

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
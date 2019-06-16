import { rollTheDice } from '../logic/game'

export const selectDice = diceNum => {
  const diceIndex = diceNum - 1

  return { type: 'SELECT_DICE', diceIndex }
}

export const selectDice = diceIndex => ({ type: 'SELECT_DICE', diceIndex })

export const deselectDice = diceIndex => ({ type: 'DESELECT_DICE', diceIndex })

export const updateScore = score => ({ type: 'UPDATE_SCORE', score })

export const updateTotal = () => ({ type: 'UPDATE_TOTAL' })

export const saveDice = () => ({ type: 'SAVE_DICE' })

export const rollDice = (dice, selectedDiceIndexes) => {
  return dispatch => {
    let newDice
    const rollDiceInterval = setInterval(() => {
      newDice = rollTheDice(dice, selectedDiceIndexes)
      dispatch({ type: 'ROLL_DICE', newDice })
    }, 50)

    setTimeout(() => {
      clearInterval(rollDiceInterval)
    }, 1000)
  }
}

export const bankScore = () => ({

})
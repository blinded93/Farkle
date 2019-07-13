import { rollTheDice, checkForFarkle } from '../logic/game'
import { modalShow } from './modal'
import { changeCurrentPlayer } from './game'

export const farkle = () => ({ type: 'FARKLE' })

export const selectDice = diceIndex => ({ type: 'SELECT_DICE', diceIndex })

export const deselectDice = diceIndex => ({ type: 'DESELECT_DICE', diceIndex })

export const updateScore = score => ({ type: 'UPDATE_SCORE', score })

export const updateTotal = () => ({ type: 'UPDATE_TOTAL' })

export const saveDice = () => ({ type: 'SAVE_DICE' })

export const rollDice = (dice, selectedAndSavedDice) => {
  return dispatch => {
    dispatch(incrementRollCount())

    new Promise((resolve, reject) => {
    let newDice
    const rollDiceInterval = setInterval(() => {
        newDice = rollTheDice(dice, selectedAndSavedDice)

        dispatch({ type: 'SAVE_DICE', newDice })
    }, 50)

    setTimeout(() => {
      clearInterval(rollDiceInterval)
        const remainingDice = newDice.filter((_, i) => !selectedAndSavedDice.includes(i))

        checkForScore(remainingDice)
          ? resolve(newDice)
          : reject(newDice)
    }, 1000)
    })
      .then(newDice => dispatch({ type: 'UPDATE_FINAL_DICE' }))
      .catch(newDice => dispatch(farkle()))
  }
}

const incrementRollCount = () => ({ type:'INCREMENT_ROLL_COUNT' })

export const bankScore = () => ({

})
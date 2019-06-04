const initialState = {
  turn: 0,
  selectedDiceIndexes: [],
  savedDice: [],
  selectedScore: 0,
  dice: ['one', 'two', 'three', 'four', 'five', 'six']
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_DICE':
      return {
        ...state,
        selectedDiceIndexes: [...state.selectedDiceIndexes, action.diceIndex]
      }

    case 'DESELECT_DICE':
      const dice = state.selectedDiceIndexes.filter(i => i !== action.diceIndex)

      return {
        ...state,
        selectedDiceIndexes: dice
      }

    case 'SAVE_DICE':
      return {
        ...state,
        selectedDiceIndexes: [],
        savedDice: [ ...state.savedDice, ...state.selectedDiceIndexes ]
      }

    case 'ROLL_DICE':
      return {
        ...state,
        dice: action.newDice
      }

    default:
      return state
  }
}
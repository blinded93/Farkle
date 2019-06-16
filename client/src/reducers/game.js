const initialState = {
  id: null,
  inProgress: true,
  winner: null,
  currentPlayer: 'player1'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return action.gameData || state

    case 'CHANGE_CURRENT_PLAYER':
      const currentPlayer = state.currentPlayer === 'player1'
        ? 'player2'
        : 'player1'

      return { ...state, currentPlayer: currentPlayer }
      
    default:
      return state
  }
}
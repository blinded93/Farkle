const initialState = {
  player1: {
    name: 'Player1',
    color: 'dark',
    score: 0,
    scoresPerTurn: []
  },
  player2: {
    name: 'Player2',
    color: 'dark',
    score: 0,
    scoresPerTurn: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_SCORECARDS':
      const { player1, player2 } = action.players

      return {
        player1: {
          ...state.player1, ...player1
        },
        player2: {
          ...state.player2, ...player2
        }
      }

    default:
      return state
  }
}
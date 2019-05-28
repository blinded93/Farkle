const initialState = {
  id: null,
  inProgress: true,
  winner: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return action.gameData || state

    default:
      return state
  }
}
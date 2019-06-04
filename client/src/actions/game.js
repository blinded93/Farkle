import { createScorecards } from './scorecards'

export const createGame = (players, token) => {
  return dispatch => {
    if (!!token) {
      return fetch('/games', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(players)
      })
        .then(resp => resp.json())
        .then(game => {
          const { scorecards, ...gameData } = game

          dispatch(newGame(gameData))
          dispatch(createScorecards(players))
        })
    } else {
      dispatch(newGame())
      dispatch(createScorecards(players))
    }
  }
}

const newGame = gameData => {
  return {
    type: 'NEW_GAME',
    gameData
  }
}
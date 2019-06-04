import { combineReducers } from 'redux'
import auth from './auth'
import modal from './modal'
import currentGame from './game'
import scorecards from './scorecards'
import turn from './turn'

export default combineReducers({
  auth,
  modal,
  currentGame,
  scorecards,
  turn
})
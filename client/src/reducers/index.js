import { combineReducers } from 'redux'
import auth from './auth'
import modal from './modal'
import currentGame from './game'
import scorecards from './scorecards'

export default combineReducers({
  auth,
  modal,
  currentGame,
  scorecards
})
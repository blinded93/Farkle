export const createScorecards = players => ({
  type: 'CREATE_SCORECARDS',
  players
})

export const updateScorecards = scorecards => ({
  type: 'UPDATE_SCORECARDS',
  scorecards
})
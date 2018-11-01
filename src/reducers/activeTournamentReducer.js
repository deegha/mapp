/**
 * Created by deegha on 17/10/2018
 */

import * as Actions from '../actions/activeTournamentActions'

const initialState = {
  loading: false,
  tournament: {}
}

export const activeTournamentReducer = ( state=initialState, action) => {
  switch(action.type) {
    case(Actions.SET_ACTIVE_TOURNAMENT) :
      return {
        loading: false,
        tournament: action.tournament
      }
    case(Actions.CLEAR_ACTIVE_TOURNAMENT): 
      return {
        loading: false,
        tournament: {}
      }
    default: return state
  }
}

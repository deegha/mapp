/**
 * Created by deegha on 11/15/2018
 */

import * as Actions from '../actions/tournamentsActions'

const initialState = {
  loading: false,
  tournaments:  []
} 

export const tournamentsReducer = ( state=initialState, action ) => {
  switch (action.type) {
    case Actions.GET_TOURNAMENTS_REQUEST: 
      return {
        ...state,
       loading: true
    }
    case Actions.GET_TOURNAMENTS_FAIL: 
      return {
        ...state,
        loading: false
      }
    case Actions.GET_TOURNAMENTS_SUCCESS: 
      return {
        loading: false,
        tournaments: action.tournaments
      }
    default: return state
  } 
}

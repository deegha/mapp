/**
 * Created by deegha on 19/11/2018
 */

import { 
  FETCH_USER_TOURNAMENT_REQUEST,
  FETCH_USER_TOURNAMENT_FAIL,
  FETCH_USER_TOURNAMENT_SUCCESS } from '../actions/activeUserActions'


const initialState = {
  loading: false,
  tournaments: [
    {
      id: 0,
      title: "",
      description: "",
      rules: "",
      banner_url: "",
      start_date: "",
      end_date: "",
      active: false,
      status: "",
      game_id: null,
      game_name: "",
      game_image: "",
      is_free: true,
      mcoin_fees: 0,
      prize_pot: 0
    }
  ]
}

export const activeUserTournamentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case  FETCH_USER_TOURNAMENT_REQUEST: 
      return {
        ...state,
        loading: true
      }
    case FETCH_USER_TOURNAMENT_FAIL:
      return {
        ...state,
        loading: false
      }
    
    case FETCH_USER_TOURNAMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        tournaments: action.tournaments
      }
    default:
      return state
  }
}

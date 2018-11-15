/**
 * Created by deegha on 11/15/2018
 */

import * as Actions from '../actions/tournamentsActions'

const initialState = {
  loading: false,
  tournaments:  [
    {
      id:null,
      image: '',
      title: '',
      date: '',
      endDate: '',
      price: '',
      ongoing: false,
      icon: '',
      infoText:"",
      rules: '',
      is_free: false,
      mcoin_fees: ''
    }
  ]
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
        tournaments: action.tournaments.map(tournament => {
          if(tournament.status === 'Active') {
            return (
              {
                id: tournament.id,
                image: tournament.banner_url,
                title: tournament.title,
                date: tournament.start_date,
                endDate: tournament.end_date,
                price: tournament.prize_pot,
                ongoing: tournament.active,
                icon: tournament.icon_url, 
                infoText: tournament.description,
                rules: tournament.rules
              }
            )
          }
        })
      }
    default: return state
  } 
}

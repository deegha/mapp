/**
 * Created by deegha on 26/10/2018
 */

import * as Actions from '../actions/activeUserActions'

const initialState = {
  loading: false,
  isOwner: false,
  user: {
    display_name: "",
    email: "",
    first_name: "",
    last_name: "",
    gender: "",
    level: "",
    m_coin: "",
    r_point: "",
    username: "",
    profile_photo: {
      is_placeholder: "",
      url: ""   
    },
    cover_photo: {
      is_placeholder: "",
      url: ""
    }
  }
}

export const activeUserReducer = (state=initialState, action) => {

  switch(action.type) {
    case Actions.SET_ACTIVE_USER_REQUEST: 
      return {
        ...state,
        loading: true
      }
    case Actions.SET_ACTIVE_USER_SUCCESS: 
      return {
        ...state,
        loading: false,
        user: {
          display_name: action.user.display_name,
          email: action.user.email,
          first_name: action.user.first_name,
          last_name: action.user.last_name,
          gender: action.user.gender,
          level: action.user.level,
          username: action.user.username,
          profile_photo: action.user.profile_photo,
          cover_photo: action.user.cover_photo
        }
      }
    case Actions.FETCH_FRIENDS_FAIL: 
      return {
        ...state,
        loading: false
      }
    case Actions.SET_ACTIVE_USER_BALANCE:
      return {
        ...state,
        user: {
          ...state.user,
          m_coin: action.balance.m_coin.current_balance,
          r_point: action.balance.r_point.current_balance
        }
      }
    default: 
      return state
  }
}
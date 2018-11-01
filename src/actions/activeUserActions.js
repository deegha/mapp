/**
 * Created by deegha on 26/10/2018
 * 
 * note: active user is the user which is in the state, basically the profile page
 */

import { getUser } from '../services/backendClient'

export const SET_ACTIVE_USER_REQUEST = 'SET_ACTIVE_USER_REQUEST'
export const SET_ACTIVE_USER_SUCCESS = 'SET_ACTIVE_USER_SUCCESS'
export const REMOVE_ACTIVE_USER = 'REMOVE_ACTIVE_USER'

export const setActiveUserRequest = () => ({
  type: SET_ACTIVE_USER_REQUEST
})

export const setActiveUserSuccess = (user) => ({
  type: SET_ACTIVE_USER_SUCCESS,
  user
})

export const setActiveUser = userName => dispatch => {

  dispatch(setActiveUserRequest())

  getUser(userName)
    .then(res => {
      dispatch(setActiveUserSuccess(res.user))
    })
    .catch(err => console.log(err,"err"))
}
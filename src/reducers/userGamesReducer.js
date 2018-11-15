/**
 * Created by deegha on 05/11/2018
 */

import {  
  FETCH_USER_GAMES_REQUEST, 
  FETCH_USER_GAMES_FAIL, 
  FETCH_USER_GAMES_SUCCESS} from '../actions/activeUserActions'

const initialState = {
  loadingUserGames: false,
  page: 1,
  userGames: [
    {
      id: null,
      title: "",
      verified: false,
      image_url: ""
    }
  ]
}

export const userGamesReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_USER_GAMES_REQUEST:
      return {
        ...state,
        loadingUserGames: true
      }
    case FETCH_USER_GAMES_FAIL:
      return {
        ...state,
        loadingUserGames: false
      }
    case FETCH_USER_GAMES_SUCCESS:
      return {
        ...state,
        loadingUserGames: false,
        userGames: action.userGames.map(userGame => ({
          id: userGame.id,
          title: userGame.title,
          verified: userGame.verified,
          image_url: userGame.image_url && userGame.image_url.thumbnail_url 
        }))
      }
    default:
      return state
  }
}
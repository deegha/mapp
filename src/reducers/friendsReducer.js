/**
 * Created by deegha on 01/11/2018
 */

import * as Actions from '../actions/activeUserActions'

const initialState = {
  friendsLoading: false,
  page: 1,
  friends:[{
    id: null,
    username: "",
    profile_photo: ""
  }],
  totalCount: 0
}

export const friendsReducer = (state = initialState ,action) => {

  switch (action.type) {
    case Actions.FETCH_FRIENDS_REQUEST:
      return {
        ...state,
        friendsLoading: true
      }
    case Actions.FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friendsLoading: false,
        page: state.page++ ,
        friends : action.newFriends.map(friend => {
          return {
            id: friend.id,
            username: friend.username,
            profile_photo: friend.profile_photo.url
          }
        }),
        totalCount: action.totalCount
      }
    case Actions.fetchFriendsFail: 
      return {
        ...state,
        friendsLoading: false
      }
    default : 
      return state
  }
}

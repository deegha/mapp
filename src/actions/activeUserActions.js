/**
 * Created by deegha on 26/10/2018
 * 
 * note: active user is the user which is in the state, basically the profile page
 */

import { getUser,getFriends, getUserGames, getUserBalance, getTournamentsForUser} from '../services/backendClient'

export const SET_ACTIVE_USER_REQUEST = 'SET_ACTIVE_USER_REQUEST'
export const SET_ACTIVE_USER_SUCCESS = 'SET_ACTIVE_USER_SUCCESS'
export const REMOVE_ACTIVE_USER = 'REMOVE_ACTIVE_USER'
export const SET_ACTIVE_USER_BALANCE = 'SET_ACTIVE_USER_BALANCE'

export const FETCH_FRIENDS_REQUEST = 'FETCH_FRIENDS_REQUEST'
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS'
export const FETCH_FRIENDS_FAIL   = 'FETCH_FRIENDS_FAIL'   

export const FETCH_USER_GAMES_REQUEST = 'FETCH_USER_GAMES_REQUEST'
export const FETCH_USER_GAMES_FAIL = 'FETCH_USER_GAMES_FAIL'
export const FETCH_USER_GAMES_SUCCESS = 'FETCH_USER_GAMES_SUCCESS'

export const FETCH_USER_TOURNAMENT_REQUEST = 'FETCH_USER_TOURNAMENT_REQUEST'
export const FETCH_USER_TOURNAMENT_FAIL = 'FETCH_USER_TOURNAMENT_FAIL'
export const FETCH_USER_TOURNAMENT_SUCCESS = 'FETCH_USER_TOURNAMENT_SUCCESS'

const setActiveUserRequest = () => ({
  type: SET_ACTIVE_USER_REQUEST
})

const setActiveUserSuccess = (user) => ({
  type: SET_ACTIVE_USER_SUCCESS,
  user
})

const setActiveUserBalanace = (balance) => ({
  type:SET_ACTIVE_USER_BALANCE,
  balance
})

export const setActiveUser = userName => dispatch => {

  dispatch(setActiveUserRequest())

  getUser(userName)
    .then(res => {
      getUserBalance()
        .then(balance => {
          dispatch(setActiveUserBalanace(balance))
        })
      dispatch(setActiveUserSuccess(res.user))
    })
    .catch(err => console.log(err,"err"))
}

const fetchFriendsRequest = () => ({
  type: FETCH_FRIENDS_REQUEST
})

const fetchFriendsSuccess = (newFriends, totalCount) => ({
  type: FETCH_FRIENDS_SUCCESS,
  newFriends,
  totalCount
})

const fetchFriendsFail = () => ({
  type: FETCH_FRIENDS_FAIL
})

export const fetchFriends= (username, page) => dispatch => {
  dispatch(fetchFriendsRequest())
  
  getFriends(username, 100, page)
    .then(res => {
      dispatch(fetchFriendsSuccess(res.users, res.total_count))
    })
    .catch(err => {
      dispatch(fetchFriendsFail())
      console.log(err)
    })
}

const fetchUserGamesRequest = () => ({
  type: FETCH_USER_GAMES_REQUEST
})

const fetchUserGamesFail = () => ({
  type: FETCH_USER_GAMES_FAIL
})

const fetchUserGamesSuccess = (userGames) => ({
  type: FETCH_USER_GAMES_SUCCESS,
  userGames
})

export const fetchUserGames = (username, perPage ,page) => dispatch => {
  dispatch(fetchUserGamesRequest())

  getUserGames(username, perPage ,page)
    .then(res => {
      dispatch(fetchUserGamesSuccess(res.games))
    })
    .catch(err => {
      dispatch(fetchUserGamesFail())
      console.log("err games", err)
    })
}

const fetchTournamentRequest = () => ({
  type: FETCH_USER_TOURNAMENT_REQUEST
})

const fetchTournamentFail = () => ({
  type: FETCH_USER_TOURNAMENT_FAIL
})

const fetchTournamentSuccess = (tournaments) => ({
  type: FETCH_USER_TOURNAMENT_SUCCESS,
  tournaments
})

export const fetchTorunaments = (username) => dispatch => {
  dispatch(fetchTournamentRequest())
  getTournamentsForUser(username)
    .then(res => {
      dispatch(fetchTournamentSuccess(res.tournaments))      
    })
    .catch(err => {
      dispatch(fetchTournamentFail())
      console.log(err)
    })
}

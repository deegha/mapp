/**
 * Created by deegha on 11/15/2018
 */

 import { getTornaments } from '../services/backendClient'

export const GET_TOURNAMENTS_REQUEST = 'GET_TOURNAMENTS_REQUEST'
export const GET_TOURNAMENTS_SUCCESS = 'GET_TOURNAMENTS_SUCCESS'
export const GET_TOURNAMENTS_FAIL = 'GET_TOURNAMENTS_FAIL'

export const getTournamentsFail = () => ({
  type: GET_TOURNAMENTS_FAIL
})

export const getTournamentsSuccess = (tournaments) => ({
  type: GET_TOURNAMENTS_SUCCESS,
  tournaments
})

export const getTournamentsRequest = () => ({
  type: GET_TOURNAMENTS_REQUEST
})

export const getTournaments = () => dispatch => {
  dispatch(getTournamentsRequest)
  getTornaments()
    .then(res => dispatch(getTournamentsSuccess(res.tournaments)))
    .catch(err => console.log(err) )
}

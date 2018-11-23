/**
 * Created by deegha on 11/16/2018
 */

import { joinTornament, getSingleTournament, getParticipants } from '../services/backendClient'

export const FETCH_ATIVE_TOURNAMENT_REQUEST = 'FETCH_ATIVE_TOURNAMENT_REQUEST'
export const SET_ACTIVE_TOURNAMENT = 'SET_ACTIVE_TOURNAMENT'
export const CLEAR_ACTIVE_TOURNAMENT = 'CLEAR_ACTIVE_TOURNAMENT'

export const SET_PLAYERS = 'SET_PLAYERS'

export const JOIN_TOURNAMENT_REQUEST = 'JOIN_TOURANEMT_REQUEST'
export const JOIN_TOURNAMENT_SUCCESS = 'JOIN_TOURNAENT_SUCCESS'
export const JOIN_TOURNAMENT_FAIL    = 'JOIN_TOURNAMENT_FAIL'

export const setActiveTournamentSuccess = (tournament) => ({
  type: SET_ACTIVE_TOURNAMENT,
  tournament
})

export const clearActiveTournament = () => ({
  type: CLEAR_ACTIVE_TOURNAMENT
})

export const setActiveTournamentRequest = () => ({
  type: FETCH_ATIVE_TOURNAMENT_REQUEST
})

export const setActiveTournament = (id) => (dispatch) => {
  dispatch(setActiveTournamentRequest())

  getSingleTournament(id)
    .then(res => {
      dispatch(setActiveTournamentSuccess(res.tournament))
    })
    .catch(err => {
      console.log(err)
    })
}

const joinTournamentRequest = () => ({
  type: JOIN_TOURNAMENT_REQUEST
}) 

const joinTournamentSuccess = () => ({
  type: JOIN_TOURNAMENT_SUCCESS
}) 

const joinTournamentFail= () => ({
  type: JOIN_TOURNAMENT_FAIL
}) 

export const joinTournament = (data, id, tournamenType) => dispatch => {
  dispatch(joinTournamentRequest())
  
  joinTornament(data, id, tournamenType)
    .then( response => dispatch(joinTournamentSuccess()) )
    .catch( err => {  
      dispatch(joinTournamentFail())
      console.log(err)
    })
}

export const setPlayers = (players) => ({
  type: SET_PLAYERS,
  players
})

export const getParticipantsAction = (id) => dispatch => { console.log(id,  "in action")
  getParticipants(id)
  .then(res => {
    if(res.is_team_tournament) {
      dispatch(setPlayers(res.team_participants))
    }else {
      dispatch(setPlayers(res.individual_participants))
    }
    
  })
}

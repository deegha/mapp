/**
 * Created by deegha on 11/16/2018
 */

export const SET_ACTIVE_TOURNAMENT = 'SET_ACTIVE_TOURNAMENT'
export const CLEAR_ACTIVE_TOURNAMENT = 'CLEAR_ACTIVE_TOURNAMENT'

export const setActiveTournamentSuccess = (tournament) => ({
  type: SET_ACTIVE_TOURNAMENT,
  tournament
})

export const clearActiveTournament = () => ({
  type: CLEAR_ACTIVE_TOURNAMENT
})

export const setActiveTournament = (id) => (dispatch, getState) => {

  const activeTournament = getState().tournaments.tournaments.filter(tournament => tournament.id === id)

  dispatch(setActiveTournamentSuccess(activeTournament[0]))
}

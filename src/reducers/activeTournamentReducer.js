/**
 * Created by deegha on 17/10/2018
 */

import * as Actions from '../actions/activeTournamentActions'

const initialState = {
  loading: false,
  tournament:  {
    id: null,
    title: "",
    infoText: "",
    rules: "",
    image: "",
    icon: "",
    date: "",
    endDate: "",
    ongoing: false,
    status: "",
    game_id: null,
    game_name: "",
    game_image: "",
    price: null,
    bracket_link: "",
    closing_date: "",
    has_prize_pot: true,
    starting_prize_pot: null,
    is_free: false,
    mcoin_fees: null,
    max_participant: null,
    participant_count: null,
    is_team_tournament: false,
    max_team_member: null,
    min_team_member: null,
    players: []
}
}

export const activeTournamentReducer = ( state=initialState, action) => {
  switch(action.type) {
    case Actions.JOIN_TOURNAMENT_REQUEST:
      return {
        loading: true
      }
    case Actions.SET_ACTIVE_TOURNAMENT:

      const { tournament } = action
      return {
        loading: false,
        tournament: {
          ...tournament,
          id: tournament.id,
          image: tournament.banner_url,
          title: tournament.title,
          date: tournament.start_date,
          endDate: tournament.end_date,
          price: tournament.prize_pot,
          ongoing: tournament.active,
          icon: tournament.icon_url, 
          infoText: tournament.description,
          rules: tournament.rules,
          players: []
        }
      }
    case Actions.CLEAR_ACTIVE_TOURNAMENT:
      return {
        loading: false,
        tournament: {}
      }
    case Actions.SET_PLAYERS: 
      return {
       ...state,
       tournament: {
         ...state.tournament,
         players: action.players
       }
      }
    default: return state
  }
}

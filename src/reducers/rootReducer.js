/**
 * Created by deegha on 03/10/2018
 */


import { combineReducers } from "redux"

import { authReducer as auth } from './authReducer'
import { tournamentsReducer as tournaments } from './tournamentsReducer'
import { activeTournamentReducer as activeTournament } from './activeTournamentReducer'
import { activeUserReducer as activeUser } from './activeUserReducer'
import { friendsReducer as friends } from './friendsReducer'
import { userGamesReducer as userGames } from './userGamesReducer'
import { activeUserTournamentsReducer as userTournament } from './activeUserTournamentsReducer'

export const rootReducer = combineReducers({
    auth,
    tournaments,
    activeTournament,
    activeUser,
    friends,
    userGames,
    userTournament
})

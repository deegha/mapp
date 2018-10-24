/**
 * Created by deegha on 03/10/2018
 */


import { combineReducers } from "redux"

import { authReducer as auth } from './authReducer'
import { tournamentsReducer as tournaments } from './tournamentsReducer'
import { activeTournamentReducer as activeTournament } from './activeTournamentReducer'

export const rootReducer = combineReducers({
    auth,
    tournaments,
    activeTournament
})

/**
 * Created by deegha on 03/10/2018
 */


import { combineReducers } from "redux"

import { authReducer as auth } from './authReducer' 

export const rootReducer = combineReducers({
    auth
})

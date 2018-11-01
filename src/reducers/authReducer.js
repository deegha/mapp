/**
 * Created by deegha on 03/10/2018
 */


import * as Actions from "../actions/authActions"

const initial_state = {
		user: {},
		authenticated : false,
		loading: false
}

export const authReducer = (state = initial_state, action) => {
	switch (action.type) {
		case Actions.AUTHENTICATE_REQUEST: 
			return {
				...state,
				loading:true
			}
		case Actions.AUTHENTICATE :  
			return {
				user: action.user,
				authenticated : true,
				loading: false
			}
		case Actions.LOG_OUT : 
			return {
				user: {},
				authenticated : false,
				loading: false
			}
		default :
			return state 
	}
}
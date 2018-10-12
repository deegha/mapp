/**
 * Created by deegha on 03/10/2018
 */


import * as Actions from "../actions/authActions"

const initial_state = {
		userId: null,
		userName : null,
		email: null, 
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
				userId: action.user.id,
				userName: action.user.name,
				email: action.user.email,
				authenticated : true,
				loading: false
			}
		case Actions.LOG_OUT : 
			return {
				userId: null,
				userName: null,
				email: null,
				authenticated : false,
				loading: false
			}
		default :
			return state 
	}
}
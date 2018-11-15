/**
 * Created by deegha on 03/10/2018
 */

export const AUTHENTICATE = 'AUTHENTICATE'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST'
export const AUTHENTICATION_FAIL = 'AUTHENTICATION_FAIL'

import { AsyncStorage } from "react-native"

import { login } from '../services/backendClient'

export const authenticate = (user) => ({
	type : AUTHENTICATE,
	user
})

export const logout = _=> ({
	type :LOG_OUT
})  

const authenticateRequest = () => ({
	type: AUTHENTICATE_REQUEST
})

const loginFail = () => ({
	type: AUTHENTICATION_FAIL
}) 

export const loginAction = (user) => dispatch => {
	dispatch(authenticateRequest())
	login(user)
		.then(res => {
			
			const tempUser = res.user
			const userObj = {
				id: tempUser.id,
				name: tempUser.display_name !== null? tempUser.display_name	: tempUser.username,
				email: tempUser.email,
				profilePhoto: tempUser.profile_photo,
				r_point: tempUser.r_point,
				m_coin: tempUser.m_coin,
				gender: tempUser.gender,
				coverPhoto: tempUser.cover_photo
			}
			
		storeToken(tempUser.session_token)
			.then( res => {
				dispatch(authenticate(userObj))
			} )
			.catch( err => console.log(err))
		})
		.catch(err => {
			dispatch(loginFail())
			console.log(err, "err")
		})
}

storeToken = (token) => {
	return AsyncStorage.setItem('token', token)
}

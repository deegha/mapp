/**
 * Created by deegha on 11/10/2018
 */
import { AsyncStorage } from "react-native"

const baseUrl = "https://stg.matchroom.net/api/"

const getToken = async () => {
  return await AsyncStorage.getItem('token')
}

const headers = {
  "Content-Type": "application/json",
  "Accept" : "application/json"
}

const setHeaders = (noToken=null) => {
  if(noToken) {
    headers = {
      "Content-Type": "application/json",
      "Accept" : "application/json"
    }
    
  }else {
  const x = getToken()
    .then(token => {
      headers = {
        ...headers,
        "X-Authentication-Token": token
      }  
    })
    .catch(() => {
      headers = {
        ...headers,
        "X-Authentication-Token": ""
      }  
    })

  }
} 

export const checkStatusAndGetJSON = (fetchResponse) =>
  fetchResponse.ok
    ? Promise.resolve(fetchResponse).then(response => response.json())
    : Promise.resolve(fetchResponse).then(apiError => apiError.json()).then(error => Promise.reject(error))


const get = (path, noToken=null) => {
  if(!noToken){
    setHeaders()
  }else{
    setHeaders(noToken)
  }  
  console.log(baseUrl+path , headers, noToken)
  return fetch(baseUrl+path, {
    headers: headers
  }).then(checkStatusAndGetJSON)
}

const post = (path, data, noToken=null) =>{
  !noToken && setHeaders()

  return fetch(baseUrl+path, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data) 
  }).then(checkStatusAndGetJSON)
}  

const del = (path, id) =>  fetch(baseUrl+path+"/"+id, {
  method: "DELETE",
  headers: headers
}).then(checkStatusAndGetJSON)

/**
 * Login with username and password
 */ 

export const login = (data) => post('membership/auth/login', data)

/**
 * Get user by user name
 */ 

export const getUser = (userName) => get('membership/users/'+userName)

/***
 * Get friends by user name
 */
export const getFriends = (userName, perPage, page) => get('membership/users/'+userName+'/friends?per_page='+perPage+'&page='+page)
 
/**
 * Get user games by username
*/

export const getUserGames = (userName, perPage, page) => get('membership/users/'+userName+'/games?per_page='+perPage+'&page='+page)

/**
 * Get user balance
*/
export const getUserBalance = () => get('membership/wallet/balance_enquiry')

/**
 * Get ongoing tornaments
*/
export const getTornaments = () => get('membership/tournaments')

/**
 * Get single tournament
*/
export const getSingleTournament = (id) => get('membership/tournaments/'+id)

/**
 * Join tornament
*/

export const joinTornament = (data, id, type) => post('membership/tournaments/'+id+'/'+type+'/', data) 


/**
 * Get Tournament participants
*/

export const getParticipants = (id) => get('membership/tournaments/'+id+'/participants', true)

/**
 * Get torunaments for user
*/

export const getTournamentsForUser = (userName) => get('membership/tournaments/'+id+'/participants')

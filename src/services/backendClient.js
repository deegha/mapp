/**
 * Created by deegha on 11/10/2018
 */

import { tornaments } from './mockData'

const baseUrl = "https://stg.matchroom.net/api/"

const headers = {
  "Content-Type": "application/json",
  "Accept" : "application/json"
}

export const checkStatusAndGetJSON = (fetchResponse) =>
  fetchResponse.ok
    ? Promise.resolve(fetchResponse).then(response => response.json())
    : Promise.resolve(fetchResponse).then(apiError => apiError.json()).then(error => Promise.reject(error))

const get = (path) => fetch(baseUrl+path, {
  headers: headers
}).then(checkStatusAndGetJSON)

const post = (path, data) =>{
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

// export const login = (user) => {
//   return Promise.resolve({
//     message: "successfully login",
//     token: 'f0d74c446f0263a05272152e312a5f5759e0dadd',
//     user: {
//       user_id: 1001,
//       email: "daratha@gmail.com",
//       first_name: "Daratha",
//       last_name: "Galkissa"
//     }
//   })
// }

export const getTornaments = () => Promise.resolve(tornaments)


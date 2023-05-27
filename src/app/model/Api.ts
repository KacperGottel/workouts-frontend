import { environmentDev } from '../../environments/environment.dev'

let apiUrl = environmentDev.apiUrl
export const workout = apiUrl + 'workout'
export const token = apiUrl + 'token'
export const tokenCheck = apiUrl + 'token/validate'
export const logout = apiUrl + 'logout'
export const registerUser = apiUrl + 'register/user'

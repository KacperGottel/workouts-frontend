import { environmentDev } from '../../environments/environment.dev'

let apiUrl = environmentDev.apiUrl
export const workout = apiUrl + 'workout'
export const token = apiUrl + 'token'
export const logout = apiUrl + 'logout'
export const register = apiUrl + 'register'

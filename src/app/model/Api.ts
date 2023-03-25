import {environmentDev} from "../../environments/environment.dev";

let apiUrl = environmentDev.apiUrl;
export const workout = apiUrl + 'workout';
export const token = apiUrl + 'token';

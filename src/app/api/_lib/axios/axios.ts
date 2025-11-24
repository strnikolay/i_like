import axios from 'axios';
//import {AuthResponse} from "../models&interface/interfaces/AuthResponse";

//export const API_URL = `http://vm734547.vps.masterhost.tech/api`
export const API_URL = `http://localhost:3000/api`

//axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
//axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

/**Создаем инстанс axios */
const $api = axios.create({
    //withCredentials: true, 
    baseURL: API_URL
})

/**перехватчики запросов */
/*$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accesstoken')}`
    //console.log(config.headers.Authorization)
    return config;
})*/

$api.interceptors.response.use(
    (response) => {
        //console.log("res", response)
        return response
    },  
    async (error) => {
        //if (error.response.status === 401){} 
        throw error;
    }
)

export default $api;
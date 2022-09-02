import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";



const { VITE_API_FATIMA_URL } = getEnvVariables();

export const fatimaServerApi = axios.create({
    baseURL: VITE_API_FATIMA_URL

});

//Todo: config interceptors

fatimaServerApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-auth-token': localStorage.getItem('token')
    }

    return config;
});





export default fatimaServerApi;
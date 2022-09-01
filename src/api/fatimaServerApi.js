import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";



const { VITE_API_FATIMA_URL } = getEnvVariables();

export const fatimaServerApi = axios.create({
    baseURL: VITE_API_FATIMA_URL

});

//Todo: config interceptors



export default fatimaServerApi;
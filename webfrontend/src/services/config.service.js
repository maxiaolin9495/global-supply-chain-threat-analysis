import config from "../config";
import axios from "axios";
import HttpService from "./http.service";
//import HTTPService from "./http.service"

export default class ConfigCreateService {
    constructor() {

    }

    static baseURL(){
        return `http://${config.ADMIN_BACKEND_URL}:${config.ADMIN_BACKEND_PORT}/configurations`
    }

    static async createConfig(configData){
        let createConfigRequest = await HttpService.post(ConfigCreateService.baseURL(), configData);
        if (createConfigRequest.status===200){
            
            return createConfigRequest.data;
        } else {
            console.log(createConfigRequest.message);
        }
    }

    static async fetchConfigs(){
        let fetchConfigRequest = await HttpService.get(ConfigCreateService.baseURL());
        if (fetchConfigRequest.length){
            return fetchConfigRequest;
        }
    }
}

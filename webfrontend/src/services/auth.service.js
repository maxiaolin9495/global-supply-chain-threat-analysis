import config from "../config";
import axios from "axios";
import HttpService from "./http.service";

export default class AuthService {
    constructor() {

    }

    static baseURL(){
        return `http://${config.ADMIN_BACKEND_URL}:${config.ADMIN_BACKEND_PORT}/administrators`
    }

    static async login(userLoginData){
        let loginRequest = await axios.post(AuthService.baseURL() + "/login", userLoginData);
        if (loginRequest.status===200){
            return loginRequest.data;
        }
        else {
            console.log(loginRequest.message);
        }
    }
}

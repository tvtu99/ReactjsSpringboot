import { User } from "../models/User";
import { Api } from "../api";

export default class Register{

    static register(user: User){
        return Api.post("/api/register", user);
    }
}
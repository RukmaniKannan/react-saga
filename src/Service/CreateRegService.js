import axios from "axios";
import { base_url } from "../Environment/Environment";
const API_URL=base_url
export function CreateRegService(request){
    return axios({
        method:"post",
        url:API_URL,
        data:request
    })
}
import axios from "axios";
import { base_url } from "../Environment/Environment";
const API_URL=base_url
export function CreateFetchService(request){
    return axios({
        method:"get",
        url:API_URL,
        data:request
    })
}
import axios from "axios";
import { base_url } from "../Environment/Environment";
const API_URL = base_url;
export function CreateUpdateService(request) {
  console.log("valuesssupdate", request);
  return axios({
    method: "PUT",
    url: API_URL + "/" + request.id,
    data: {
      userName: request.values.userName,
      mobileNo:request.values.mobileNo,
      language: request.values.language,
    gender:request.values.gender,


    },
  });
}

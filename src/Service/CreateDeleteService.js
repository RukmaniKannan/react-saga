import axios from "axios";
import { base_url } from "../Environment/Environment";
const API_URL = base_url;
export function CreateDeleteService(id) {
  return axios({
    method: "delete",
    url: API_URL + "/" + id,
  });
}

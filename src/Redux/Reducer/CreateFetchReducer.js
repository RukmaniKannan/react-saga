import { Create_Fetch_Request, Create_Fetch_Success, Create_Fetch_Failure } from "../ActionType";
const initialState = {
  error: null,
  loading: false,
  data: [],

};
console.log("rukku")

console.log("initialState",initialState)
function CreateFetchReducer(state = initialState,action) {
  switch (action.type) {
    case Create_Fetch_Request:
      console.log("reg",state)
      return {
        ...state,
        loading: true,
        error: null,
      };
    case  Create_Fetch_Success:
      console.log("success", action.payload)
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case Create_Fetch_Failure:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export default CreateFetchReducer;

import { Create_Delete_Request, Create_Delete_Success, Create_Delete_Failure } from "../ActionType";
const initialState = {
  error: null,
  loading: false,
  data: [],

};
console.log("rukku")

console.log("initialState",initialState)
function CreateDeleteReducer(state = initialState,action) {
  switch (action.type) {
    case Create_Delete_Request:
      console.log("reg",state)
      return {
        ...state,
        loading: true,
        error: null,
      };
    case  Create_Delete_Success:
      console.log("success", action.payload)
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case Create_Delete_Failure:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export default CreateDeleteReducer;

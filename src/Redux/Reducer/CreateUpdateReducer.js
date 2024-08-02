import { Create_Update_Request, Create_Update_Success, Create_Update_Failure } from "../ActionType";
const initialState = {
  error: null,
  loading: false,
  data: [],
};
function CreateUpdateReducer(state = initialState, action) {
  switch (action.type) {
    case  Create_Update_Request:
      console.log("state",state)
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Create_Update_Success:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.values,
      };
    case  Create_Update_Failure:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export default CreateUpdateReducer;

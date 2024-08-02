import { Create_Request, Create_Success, Create_Failure } from "../ActionType";
const initialState = {
  error: null,
  loading: false,
  data: [],
};
function CreateRegReducer(state = initialState, action) {
  switch (action.type) {
    case Create_Request:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Create_Success:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case Create_Failure:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export default CreateRegReducer;

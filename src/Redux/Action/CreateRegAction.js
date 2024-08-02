import * as Types from "../ActionType";

export  const CreateRequestAction=(values)=>({
    type:Types.Create_Request,
    payload:values,
 
});
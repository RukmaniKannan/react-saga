import * as Types from "../ActionType";

 export  const CreateDeleteAction=(id)=>({
    type:Types.Create_Delete_Request,
    payload:id
});
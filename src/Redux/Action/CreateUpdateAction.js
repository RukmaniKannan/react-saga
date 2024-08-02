import * as Types from "../ActionType";

export const CreateUpdateAction = (value) => ({
  type: Types.Create_Update_Request,
  payload: value,
});

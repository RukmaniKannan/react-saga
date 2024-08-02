import { call, put, takeLatest } from "redux-saga/effects";
import * as Types from "../ActionType";
import { CreateUpdateService } from "../../Service/CreateUpdateService";

function* CreateUpdateSaga({payload}) {
  console.log(payload, "sagapayload");
  try {
    const CreateRes = yield call(CreateUpdateService, payload);
    const response = CreateRes.data;
    console.log("Updatasaga", response);
    yield put({
      type: Types.Create_Update_Success,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: Types.Create_Update_Failure,
      error: error,
    });
  }
}

function* watchCreateUpdateSaga() {
  yield takeLatest(Types.Create_Update_Request, CreateUpdateSaga);
}
export default watchCreateUpdateSaga;

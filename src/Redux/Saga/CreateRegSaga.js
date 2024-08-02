import { call, put, takeLatest } from "redux-saga/effects";
import * as Types from "../ActionType";
import { CreateRegService } from "../../Service/CreateRegService";

function* CreateRegSaga({payload}){
 try{
    const CreateRes=yield call(CreateRegService,payload);
    const response=CreateRes.data

     yield put({
        type:Types.Create_Success,
        payload:response
     })

 }
 catch(error){
    yield put({
        type:Types.Create_Failure,
        error:error
    })
 }
}

function * watchCreateRegSaga() {
    yield takeLatest(Types.Create_Request,CreateRegSaga); 
}
export default watchCreateRegSaga;
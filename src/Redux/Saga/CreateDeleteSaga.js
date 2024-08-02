import { call, put, takeLatest } from "redux-saga/effects";
import * as Types from "../ActionType";
import { CreateDeleteService } from "../../Service/CreateDeleteService";

function* CreateDeleteSaga({payload}){
 try{
    const CreateRes=yield call(CreateDeleteService,payload);
    const response=CreateRes.data
     console.log("resdatasaga",response)
     yield put({
        type:Types.Create_Delete_Success,
        payload:response
     })

 }
 catch(error){
    yield put({
        type:Types.Create_Delete_Failure,
        error:error
    })
 }
}

function * watchCreateDeleteSaga() {
    yield takeLatest(Types.Create_Delete_Request,CreateDeleteSaga); 
}
export default watchCreateDeleteSaga;
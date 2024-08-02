import { call, put, takeLatest } from "redux-saga/effects";
import * as Types from "../ActionType";
import { CreateFetchService } from "../../Service/CreateFetchService";

function* CreateFetchSaga({payload}){
 try{
    const CreateRes=yield call(CreateFetchService,payload);
    const response=CreateRes.data
     console.log("resdatasaga",response)
     yield put({
        type:Types.Create_Fetch_Success,
        payload:response
     })

 }
 catch(error){
    yield put({
        type:Types.Create_Fetch_Failure,
        error:error
    })
 }
}

function * watchCreateFetchSaga() {
    yield takeLatest(Types.Create_Fetch_Request,CreateFetchSaga); 
}
export default watchCreateFetchSaga;
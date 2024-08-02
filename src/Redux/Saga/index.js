import{all} from "redux-saga/effects"
import watchCreateRegSaga from "./CreateRegSaga";
import watchCreateFetchSaga from "./CreateFetchSaga";
import watchCreateDeleteSaga from "./CreateDeleteSaga";
import watchCreateUpdateSaga from "./CreateUpdateSaga";

export default function* rootSaga() {
    yield all([
  watchCreateRegSaga(),
  watchCreateFetchSaga(),
  watchCreateDeleteSaga(),
  watchCreateUpdateSaga(),

    ]);
}

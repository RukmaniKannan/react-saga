import { combineReducers } from "@reduxjs/toolkit";
import CreateRegReducer from "./CreateRegReducer";
import CreateFetchReducer from "./CreateFetchReducer";
import CreateDeleteReducer from "./CreateDeleteReducer";
import CreateUpdateReducer from "./CreateUpdateReducer";


const rootReducer=combineReducers({
    createReg:CreateRegReducer,
    createFetch:CreateFetchReducer,
    createDelete:CreateDeleteReducer,
    createUpdate:CreateUpdateReducer,
});


export default rootReducer;
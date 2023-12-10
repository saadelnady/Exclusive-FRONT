import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { thunk } from "redux-thunk";

const appReducers = combineReducers({ userReducer });
export const store = createStore(appReducers, applyMiddleware(thunk));

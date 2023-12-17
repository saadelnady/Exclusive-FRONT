import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { productsReducer } from "./reducers/productsReducer";
import { thunk } from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const appReducers = combineReducers({ userReducer, productsReducer });
export const store = createStore(appReducers, enhancer);

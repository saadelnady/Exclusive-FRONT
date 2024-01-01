import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
import { sellerReducer } from "./reducers/sellerReducer.js";

import { thunk } from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const appReducers = combineReducers({
  userReducer,
  productReducer,
  sellerReducer,
});
export const store = createStore(appReducers, enhancer);

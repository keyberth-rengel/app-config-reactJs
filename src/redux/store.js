import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

//reducers
import App from "./reducers/app";

const reducers = combineReducers({App});

let middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

export const store = createStore(reducers, {}, applyMiddleware(...middleware));

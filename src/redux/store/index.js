import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../modules";
import trackUserActionMiddleware from "../modules/user-tracked-action/middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {};

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(trackUserActionMiddleware))
);

export default store;

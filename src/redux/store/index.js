import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../modules";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {};

const customMiddleWareLogger = store => next => action => {
  const USER_TRACKED_ACTION_TERM = "USER_TRACKED_ACTION:";
  if (action.type.indexOf(USER_TRACKED_ACTION_TERM) > -1) {
    // trigger analytics track event API ?
    const userAction = action.type
      .slice(USER_TRACKED_ACTION_TERM.length)
      .trim();
    console.log("User triggered: ", userAction);
  }
  next(action);
};

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(customMiddleWareLogger))
);

export default store;

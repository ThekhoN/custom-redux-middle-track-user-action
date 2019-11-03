import { combineReducers } from "redux";
import counter from "./counter";
import userTrackedAction from "./user-tracked-action";

const rootReducer = combineReducers({
  counter,
  userTrackedAction
});

export default rootReducer;

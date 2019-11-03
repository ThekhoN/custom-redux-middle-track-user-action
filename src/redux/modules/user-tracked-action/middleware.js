import { UPDATE_USER_TRACKED_ACTION } from "./actions";

const trackUserActionMiddleware = store => next => action => {
  const USER_TRACKED_ACTION_TERM = "USER_TRACKED_ACTION:";
  if (
    action.type === UPDATE_USER_TRACKED_ACTION &&
    action.payload.indexOf(USER_TRACKED_ACTION_TERM) > -1
  ) {
    // trigger analytics track event API ?
    const userAction = action.payload
      .slice(USER_TRACKED_ACTION_TERM.length)
      .trim();
    console.log("USER_TRACKED_ACTION TRIGGERED: ", userAction);
  }
  next(action);
};

export default trackUserActionMiddleware;

import { UPDATE_USER_TRACKED_ACTION } from "./actions";

const initialState = {
  userTrackedAction: ""
};

const userTrackedAction = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_TRACKED_ACTION:
      return {
        ...state,
        userTrackedAction: action.payload
      };
    default:
      return state;
  }
};

export default userTrackedAction;

const initialState = {
  count: 0
};

export const updateCount = payload => ({
  type: "UPDATE_COUNT",
  payload
});

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COUNT":
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};

export default counter;

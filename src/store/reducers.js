import { combineReducers } from "redux";

export const count = (state, action) => {
  return {
    count: combineReducers({
      num
    })(state.coutn, action)
  };
};

function num(state = 0, action) {
  switch (action.type) {
    case "SET_NUM":
      return action.num;
    case "ADD_NUM":
      return state + 1;
    default:
      return state;
  }
}

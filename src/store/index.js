import { createStore } from "redux";
import { count } from "./reducers";

const store = createStore(count, {
  count: {
    num: 0
  }
});

export default store;

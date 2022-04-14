import "./styles.css";
import { createStore, combineReducers } from "redux";
import { count } from "./store/reducers";
import { Routes, Route } from "react-router-dom";
import { setNum, addNum } from "./store/action";
import Login from "./login";
import Home from "./home";

export default function App() {
  const store = createStore(count, {
    count: {
      num: 0
    }
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <label>あなたはこのサイトに訪れた:</label>
      <label></label>
      <label>番目のユーザです。</label>
      <ul>
        <li className="">
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      <input
        type="button"
        value="count up"
        onClick={() => store.dispatch(setNum(10) && console.log(store))}
      />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

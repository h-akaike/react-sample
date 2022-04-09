import "./styles.css";
import store from "./store/index";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <label>{store.getState().count}</label>
    </div>
  );
}

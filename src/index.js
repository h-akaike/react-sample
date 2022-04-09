import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

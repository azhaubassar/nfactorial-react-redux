import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createStore } from "redux";
import { reducer } from "./reducer";
import App from "./components/App";
import { Provider } from "react-redux";

const store = createStore(reducer);
// const store = useStore()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  // Provider: 다른 컴포넌트에서 Redux store를 사용
  <Provider store={store}>
    <App />
  </Provider>
);

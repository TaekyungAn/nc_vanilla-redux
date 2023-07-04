import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const persistor = persistStore(store);
root.render(
  // Provider: 다른 컴포넌트에서 Redux store를 사용
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

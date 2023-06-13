import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StateProvider from "./context/StateProvider";

import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <StateProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </StateProvider>
  </React.StrictMode>
);

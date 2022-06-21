import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StateProvider from "context/StateProvider";
import { BrowserRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider>
      <Router>
     <App/>
     </Router>
    </StateProvider>
  </React.StrictMode>
);

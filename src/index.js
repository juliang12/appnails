import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StateProvider from "context/StateProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "components";
import Caja from "routes/Caja";
import Login from "routes/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/caja" element={<Caja />} />
            <Route path="/login" element={<Login />} />
          </Routes>{" "}
        </Layout>
      </Router>
    </StateProvider>
  </React.StrictMode>
);

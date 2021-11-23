import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Application from "./components/Application";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Application />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

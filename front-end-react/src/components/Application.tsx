// import React from "react";
// import ReactDOM from "react-dom";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./Application.scss";
import Nav from "./Nav";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login";
import Home from "./Home/Home";
import { useContext } from "react";
import { stateContext } from "../providers/StateProvider";
import { Routes, Route } from "react-router-dom";

export default function Application() {
  const {
    state,
    handleDayChange,
    handleTime,
    handleVegetable,
    bookNotification,
  } = useContext(stateContext);
  console.log(state);
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

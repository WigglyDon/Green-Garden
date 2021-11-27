// import React from "react";
// import ReactDOM from "react-dom";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./Application.scss";
import useApplicationData from "../hooks/useApplicationData";
import Nav from "./Nav";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login";
import Home from "./Home/Home";
import Scheduler from "./Scheduler/Scheduler";
import { Routes, Route } from "react-router-dom";

export default function Application() {
  const {
    state,
    handleDayChange,
    handleTime,
    bookNotification,
    handleVegetable,
    createGarden,
    changeGarden,
    //  updateGardenState
  } = useApplicationData();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home state={state} />} />
        <Route path="login" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <Dashboard
              state={state}
              handleDayChange={handleDayChange}
              handleTime={handleTime}
              bookNotification={bookNotification}
              handleVegetable={handleVegetable}
              createGarden={createGarden}
              //updateState= {updateGardenState}
              changeGarden={changeGarden}
            />
          }
        />
        <Route
          path="scheduler"
          element={
            <Scheduler
              state={state}
              handleDayChange={handleDayChange}
              handleTime={handleTime}
              bookNotification={bookNotification}
              handleVegetable={handleVegetable}
            />
          }
        />
      </Routes>
    </div>
  );
}

// import React from "react";
// import ReactDOM from "react-dom";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./Application.scss";
import useApplicationData from "../hooks/useApplicationData";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login";
import Logout from "./Logout";
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
    handleAddVegetable,
    updateGardenVegetableState,
    //  updateGardenState
  } = useApplicationData();

  return (
    <div className="backdrop">
      <Routes>
        <Route
          path="/"
          element={
            <Home parentState={state} handleAddVegetable={handleAddVegetable} />
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route
          path="dashboard"
          element={
            <Dashboard
            updateGardenVegetableState={updateGardenVegetableState}
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

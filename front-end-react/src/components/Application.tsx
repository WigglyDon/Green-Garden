import React from "react";
import ReactDOM from "react-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Scheduler from "./Scheduler /Scheduler";
import useApplicationData from "../hooks/useApplicationData";

export default function Application() {
  const { state, handleDayChange, handleTime } = useApplicationData();
  return (
    <div>
      <Scheduler
        state={state}
        handleDayChange={handleDayChange}
        handleTime={handleTime}
      />
    </div>
  );
}

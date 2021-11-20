import React from "react";
import ReactDOM from "react-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Scheduler from "./Scheduler /Scheduler";

export default function Application() {
  return (
    <div>
      <Scheduler />
    </div>
  );
}

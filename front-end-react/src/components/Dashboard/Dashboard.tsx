import React from "react";
import GraphTwo from "./GraphTwo";
import GraphOne from "./GraphOne";
import Scheduler from "../Scheduler /Scheduler";
import Map from "./Map";
import { Button } from "@mui/material";

export default function Dashboard(props) {
  const { state, handleDayChange, handleTime, bookNotification } = props;

  return (
    <div>
      <Map />
      <GraphOne />
      <GraphTwo />
      <Button variant="contained">Set Notifications</Button>
      <Scheduler
        state={state}
        handleDayChange={handleDayChange}
        handleTime={handleTime}
        bookNotification={bookNotification}
      />
    </div>
  );
}

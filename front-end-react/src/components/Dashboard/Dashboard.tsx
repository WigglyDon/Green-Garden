import React from "react";
import GraphTwo from "./GraphTwo";
import GraphOne from "./GraphOne";
import Scheduler from "../Scheduler /Scheduler";
import Map from "./Map";
import { Button } from "@mui/material";
import SideBarList from "../SideBar/GardensList";
import GardenCardList from "./GardenCardList";

export default function Dashboard(props: any) {
  const { state, handleDayChange, handleTime, bookNotification } = props;

  return (
    <div>
      <GardenCardList />
      <SideBarList />
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

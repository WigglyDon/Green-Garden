import React from "react";
import GraphTwo from "./GraphTwo";
import GraphOne from "./GraphOne";
// import Scheduler from "../Scheduler/Scheduler";
import Map from "./Map";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SideBarList from "../SideBar/GardensList";

// import GardenCardList from "./GardenCardList";
// import GardenCard from "../GardenCard";

export default function Dashboard(props: any) {
  const { state, handleDayChange, handleTime, bookNotification } = props;

  return (
    <div className="layout">
      <div className="sidebard">
        <SideBarList state={state} />
      </div>
      <div className="dashboard">
        <Map />
        <GraphOne />
        <GraphTwo />
      </div>
      <Link to="/scheduler">
        <Button variant="contained">Set Notifications</Button>
      </Link>
    </div>
  );
}

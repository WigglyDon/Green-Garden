import React from "react";
import GraphTwo from "./GraphTwo";
import GraphOne from "./GraphOne";
import Scheduler from "../Scheduler /Scheduler";
import Map from "./Map";
import { Button } from "@mui/material";
import SideBarList from "../SideBar/GardensList";
import { useContext } from "react";
import { stateContext } from "../../providers/StateProvider";

export default function Dashboard() {
  const { state } = useContext(stateContext);

  return (
    <div>
      <SideBarList state={state} />
      <Map />
      <GraphOne />
      <GraphTwo />
      <Button variant="contained">Set Notifications</Button>
      <Scheduler />
    </div>
  );
}

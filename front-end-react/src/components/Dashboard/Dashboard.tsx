import React from "react";
import GraphTwo from "./GraphTwo";
import GraphOne from "./GraphOne";
// import Scheduler from "../Scheduler/Scheduler";
import Map from "./Map";
import { Button } from "@mui/material";
import Sidebar from "../SideBar";
import { Link } from "react-router-dom";
import '../SideBar/index.scss'


// import GardenCardList from "./GardenCardList";
// import GardenCard from "../GardenCard";

export default function Dashboard(props: any) {
  const { state, handleDayChange, handleTime, bookNotification, createGarden, changeGarden, updateState } = props;



  // console.log("S",state);

  //{state.garden === 1 ? <Map /> : state.garden === 2 ? <Graph /> : state.garden === 3 ? <Graph /> : null}

  return (
    <div className="layout">
      <div className="sidebard">
        <Sidebar 
          state={state} 
          createGarden={createGarden}
         // updateGardenState={updateGardenState}
          changeGarden={changeGarden}
          />
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

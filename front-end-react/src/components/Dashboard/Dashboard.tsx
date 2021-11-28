// eslint-disable-next-line
import React from "react";
import GraphTwo from "./GraphTwo";
import GraphOne from "./GraphOne";
import GraphThree from "./SeasonsPieChart";
import GraphFour from "./GraphFour";
import { TagsBarGraph } from "./TagsBarGraph";
import Scheduler from "../Scheduler/Scheduler";
import Map from "./Map";
import Nav from "../Nav";
import { Button, formGroupClasses } from "@mui/material";
import Sidebar from "../SideBar";
import { Link, NavLink } from "react-router-dom";
import "../SideBar/index.scss";
import "../Dashboard/GraphOne.scss";
import SeasonsPieChart from "./SeasonsPieChart";
import { useState } from "react";
import DeleteForm from "./DeleteForm";
import GardenOptions from "../GardenOptions";

// import GardenCardList from "./GardenCardList";
// import GardenCard from "../GardenCard";

export default function Dashboard(props: any) {
  // eslint-disable-next-line
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const {
    updateGardenVegetableState,
    state,
    handleDayChange,
    handleTime,
    bookNotification,
    createGarden,
    changeGarden,
    updateState,
    deleteGarden,
    updateGardenState,
    handleVegetable,
  } = props;
  // console.log("state in dashboard", state.garden);
  const gardenId = state.garden;
  return (
    <div className="main">
      <Nav />
      <div className="layout">
        <div className="sidebard">
          <Sidebar
            updateGardenVegetableState={updateGardenVegetableState}
            state={state}
            createGarden={createGarden}
            // updateGardenState={updateGardenState}
            changeGarden={changeGarden}
          />
        </div>
        {/* <Map /> */}

        <div className="dashboard">
          <div className="graphContainer full">
            {/* vegetable care */}
            <GraphTwo state={state.gardensVegetables} />
          </div>
          <div className="graphContainer half">
            <SeasonsPieChart state={state.gardensVegetables} />

            {/* garden diversity */}
            <GraphOne state={state.gardensVegetables} />
          </div>
          <div className="graphContainer half">
            <TagsBarGraph state={state.gardensVegetables} />
          </div>
          <div className="graphContainer full">
            <GraphFour />
          </div>
          {gardenId ? (
            <GardenOptions
              state={state}
              handleDayChange={handleDayChange}
              handleTime={handleTime}
              bookNotification={bookNotification}
              handleVegetable={handleVegetable}
              updateGardenState={updateGardenState}
              deleteGarden={deleteGarden}
              showNotifications={showNotifications}
              showDelete={showDelete}
              setShowNotifications={setShowNotifications}
              setShowDelete={setShowDelete}
            />
          ) : null}
          {/* <Button variant="contained">
             <NavLink to="/scheduler" style={{ textDecoration: "none"}>
                 Set Notifications
            </NavLink>
        </Button> */}
        </div>
      </div>
    </div>
  );
}

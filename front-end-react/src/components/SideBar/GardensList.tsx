import React from "react";
import Garden from "../SideBar/Garden";
import GardenCardList from "../Dashboard/GardenCardList";
import "./SideBar.scss";

export default function SideBarList() {
  return (
    <div className="side-bar">
      <div className="logo">
        <img
          src="https://raw.githubusercontent.com/nikolajjuuel/scheduler/master/public/images/logo.png"
          alt="logo"
        />
      </div>
      <hr />
      <div className="garden-card-list">
        <GardenCardList />
      </div>
    </div>
  );
}

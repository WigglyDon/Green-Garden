import React from "react";
import ReactDOM from "react-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Scheduler from "./Scheduler /Scheduler";
import useApplicationData from "../hooks/useApplicationData";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import VegetableCardList from "./VegetableCardList";
import GardenCardList from "./GardenCardList";
import Dashboard from "./Dashboard/Dashboard";
import SideBarList from "./SideBar/SideBarList";

export default function Application() {
  const { state, handleDayChange, handleTime, bookNotification } =
    useApplicationData();
  return (
    <div>
      <Nav />
      <SearchBar />
      <VegetableCardList />
      <GardenCardList />
      <Dashboard
        state={state}
        handleDayChange={handleDayChange}
        handleTime={handleTime}
        bookNotification={bookNotification}
      />
      <SideBarList />
    </div>
  );
}

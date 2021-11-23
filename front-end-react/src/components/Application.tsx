// import React from "react";
// import ReactDOM from "react-dom";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import useApplicationData from "../hooks/useApplicationData";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import VegetableCardList from "./VegetableCardList";
import GardenCardList from "./GardenCardList";
import Dashboard from "./Dashboard/Dashboard";
import SideBarList from "./SideBar/SideBarList";
import { Link } from "react-router-dom";

export default function Application() {
  const {
    state,
    handleDayChange,
    handleTime,
    bookNotification,
    handleVegetable,
  } = useApplicationData();
  return (
    <div>
      <Nav />
      <SearchBar />
      <VegetableCardList state={state} />
      <GardenCardList />
      <SideBarList />
    </div>
  );
}

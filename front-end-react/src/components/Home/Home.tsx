import React from "react";
// eslint-disable-next-line
import Card from "../Card";
import SearchBar from "./SearchBar";
import VegetableCardList from "./VegetableCardList";
import "./Home.scss";

export default function Home() {
  return (
    <div className="homepage">
      <SearchBar />
      <VegetableCardList />
    </div>
  );
}

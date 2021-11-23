import React from "react";
import Card from "../Card";
import SearchBar from "./SearchBar";
import VegetableCardList from "../VegetableCardList";

export default function Home(props: any) {
  const { state } = props;
  return (
    <div>
      <SearchBar />
      <VegetableCardList state={state} />
    </div>
  );
}

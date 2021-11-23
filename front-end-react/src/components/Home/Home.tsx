import React from "react";
// eslint-disable-next-line
import Card from "../Card";
import SearchBar from "./SearchBar";
import VegetableCardList from "./VegetableCardList";

export default function Home(props: any) {
  const { state } = props;
  return (
    <div>
      <SearchBar />
      <VegetableCardList state={state} />
    </div>
  );
}

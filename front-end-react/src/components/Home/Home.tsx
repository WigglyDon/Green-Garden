import React from "react";
// eslint-disable-next-line
import Card from "../Card";
import SearchBar from "./SearchBar";
import VegetableCardList from "./VegetableCardList";
import './Home.scss'

export default function Home(props: any) {
  const { state } = props;
  return (
    <div className='homepage'>
      <SearchBar state={state} />
      <VegetableCardList state={state} />
    </div>
  );
}

import React from "react";
import "./VegetableCardList.scss";

import VegetableCard from "./VegetableCard";

export default function VegetableCardList(props: any) {
  const vegetables = props.vegetables;
  console.log(vegetables)
  const listVegetables = vegetables.map(() => {
   return <VegetableCard />;
  });
  console.log(listVegetables)
  return <ul className="VegetableCardList">{listVegetables}</ul>;

}

import React from "react";
import Card from "./Card";

export default function VegetableCardList(props:any) {
  const { state } = props;
  const vegetableArray = state.vegetables;
  console.log(vegetableArray)
  return (
    <div>
      <Card />
      I'm the vefsard list.
    </div>
  );
}

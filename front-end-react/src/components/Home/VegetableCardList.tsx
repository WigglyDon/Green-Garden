import React from "react";
import Card from "../Card";

export default function VegetableCardList(props:any) {
  const { state } = props;
  const vegetableArray = state.vegetables;
  console.log(vegetableArray)
  return (
    <div className='vegetable-card-list'>
      <Card />
      ITEM CONTAINER
    </div>
  );
}
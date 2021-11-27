// eslint-disable-next-line
import React, { useState } from "react";
// import Card from "../Card";
import GardenCard from "../GardenCard";

export default function GardenCardList(props: any) {

  const { state, changeGarden } = props;


  
  console.log("STATE DOT GARDEN", state);
  //gardens array [] to individual garden cards
  const gardenList = state?.gardens?.map((garden: any) => (

    <GardenCard
      selected={state.selected}
      key={garden.id}
      id={garden.id}
      garden_name={garden.name}
      image={garden.image_url}
      changeGarden={changeGarden}
    />
  ));

  return (
    <div className='garden-card'>
      {gardenList}
      <div className='new-garden'></div>
    </div>
  )
}

import React from "react";
import Card from "../Card";

export default function GardenCardList(props: any) {
  const { state } = props;

  console.log(state)

  const gardenList = state.map((garden: any) => 
    <Card 
      key= {garden.id}
      id= {garden.id}
      name= {garden.name}
      image= {garden.image_url}
    />
  )

  return (
    <div>
      {gardenList}
    </div>
  );
}

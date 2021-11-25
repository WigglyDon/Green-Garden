import React from "react";
// import Card from "../Card";
import GardenCard from "../GardenCard";

export default function GardenCardList(props: any) {
  const { state } = props;

  // console.log("gardencardlist", state);

  const gardenList = state.map((garden: any) => (
    <GardenCard
      key={garden.id}
      id={garden.id}
      garden_name={garden.name}
      image={garden.image_url}
    />
  ));

  return <div className="garden-card">{gardenList}</div>;
}

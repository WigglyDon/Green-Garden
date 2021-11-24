import React from "react";
import GardenCard from "../GardenCard";
import { useContext } from "react";
import { stateContext } from "../../providers/StateProvider";

export default function GardenCardList() {
  const { state } = useContext(stateContext);
  const gardenData = state.garden;
  console.log("gardencardlist", gardenData);

  const gardenList = gardenData.map((garden: any) => <GardenCard />);

  return <div className="garden-card">{gardenList}</div>;
}

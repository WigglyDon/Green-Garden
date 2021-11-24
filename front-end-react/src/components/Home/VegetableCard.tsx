import React from "react";
import { useContext } from "react";
import { stateContext } from "../../providers/StateProvider";
import "./VegetableCard.scss";

export default function VegetableCard() {
  const { state } = useContext(stateContext);

  return <div className="VegetableCard">VEG CARD</div>;
}

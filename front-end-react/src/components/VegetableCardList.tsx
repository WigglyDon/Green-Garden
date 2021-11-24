import React from "react";
import Card from "./Card";

export default function VegetableCardList(props: any) {
  const { state } = props;
  const vegetableArray = state.vegetables;
  return (
    <div>
      <Card />
      I'm the vegetable card list.
    </div>
  );
}

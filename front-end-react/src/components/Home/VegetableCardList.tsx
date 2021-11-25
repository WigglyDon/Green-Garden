import React from "react";
import "./VegetableCardList.scss";

import VegetableCard from "./VegetableCard";

export default function VegetableCardList(props: any) {
 const {state} = props
  const vegetables = props.vegetables[0];

  const mapVegetables = (vegetableList:any) => {
    let vegCards = [];
    

    for (let i = 0; i < vegetableList.length; i++) {
      const vegetable = props.vegetables[0][i];
      vegCards.push(<VegetableCard state={state} key={vegetable.id} vegetable={vegetable}/>) 
    }
    return vegCards
  }

  const listVegetables = mapVegetables(vegetables)




  return <ul className="VegetableCardList">{listVegetables}</ul>;

}

import React from "react";
import './VegetableCard.scss'


export default function VegetableCard(props:any) {
  const { state } = props;
  const vegetableArray = state.vegetables;
  console.log(vegetableArray)
  return (
    <div className='VegetableCard'>
      VEG CARD
    </div>
  );
}
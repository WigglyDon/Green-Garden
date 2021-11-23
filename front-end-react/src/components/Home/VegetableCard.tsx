import React from "react";
import './VegetableCardList.scss'


export default function VegetableCard(props:any) {
  const { state } = props;
  const vegetableArray = state.vegetables;
  console.log(vegetableArray)
  return (
    <div className='searchList'>
      BING BONG INSIDE OF ANOTHER ONE
    </div>
  );
}
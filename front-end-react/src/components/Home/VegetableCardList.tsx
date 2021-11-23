import React from "react";
import './VegetableCardList.scss'

import VegetableCard from './VegetableCard'


export default function VegetableCardList(props:any) {
  const { state } = props;
  const vegetableArray = state.vegetables;
  console.log(vegetableArray)
  return (
    <div className='VegetableCardList'>
      <VegetableCard state={state}/>
    </div>
  );
}
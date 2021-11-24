import React from "react";
import './VegetableCard.scss'


export default function VegetableCard(props:any) {

  return (
    <div className='VegetableCard'>
      {props.vegetable.name}
    </div>
  );
}
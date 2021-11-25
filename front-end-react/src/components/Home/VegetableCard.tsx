import React from "react";
import './VegetableCard.scss'


export default function VegetableCard(props:any) {
console.log(props.vegetable)
  return (
    <div className='VegetableCard'>
      {props.vegetable.name}
      <img className='VegetableCardImage' alt="veggie pic" src={props.vegetable.image_url}/>
      <div>description: {props.vegetable.description}</div>
      <div>growing_days: {props.vegetable.growing_days}</div>
      <div>height: {props.vegetable.height}</div>
      <div>native_region: {props.vegetable.native_region}</div>

      
    </div>
  );
}
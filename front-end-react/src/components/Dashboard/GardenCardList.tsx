// eslint-disable-next-line
import React, { useState } from "react";
// import Card from "../Card";
import GardenCard from "../GardenCard";
import classNames from 'classnames';

export default function GardenCardList(props: any) {

  const { state, changeGarden, updateGardenVegetableState } = props;



  const [selected, setSelected] = useState(null)

  const gardenList = state?.gardens?.map((garden: any) => (
    <div className='garden-card'>
      <GardenCard
        updateGardenVegetableState={updateGardenVegetableState}
        selected={selected}
        setSelected={setSelected}
        key={garden.id}
        id={garden.id}
        garden_name={garden.name}
        image={garden.image_url}
        changeGarden={changeGarden}
      />
    </div>
  ));

  return (
    <div className='garden-cards'>
      {gardenList}
      <div className='new-garden'></div>
    </div>
  )
}

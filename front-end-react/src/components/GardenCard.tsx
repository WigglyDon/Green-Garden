import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import './GardenCard.scss'
import { useState } from 'react';


export default function GardenCard(props: any) {
  const { garden_name, image, garden, changeGarden } = props;

  // console.log('GARDEN CARD PROPS',props.id)



  return (
    <Card  onClick = {() => changeGarden(props.id)}>
      <Typography variant="body2" color="text.secondary" className="card-body">
         {garden_name}
      </Typography>
    </Card>
  );
}

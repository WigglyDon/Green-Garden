import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import './GardenCard.scss'
import { useState } from 'react';
import classNames from 'classnames';

export default function GardenCard(props: any) {
  const { garden_name, image, garden, changeGarden, id, selected} = props;
  // const [selected, setSelected] = useState(false);
  console.log(selected)

  let gardenClass = classNames("", {
    "selected": selected
});

const funktown = function() {
  changeGarden(id)
}


  console.log("GARDEN", garden)

  return (
    <Card  className={gardenClass} onClick = {funktown}>
      <Typography variant="body2" color="text.secondary" className="card-body">
         {garden_name}
      </Typography>
    </Card>
  );
}

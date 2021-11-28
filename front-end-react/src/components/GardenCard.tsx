import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "./GardenCard.scss";
import { useState } from "react";
import classNames from "classnames";

export default function GardenCard(props: any) {
  // const [selected, setSelected] = useState(false)
  const {
    garden_name,
    garden,
    changeGarden,
    id,
    selected,
    setSelected,
    updateGardenVegetableState,
  } = props;

  let gardenClass = classNames("", {
    selected: selected === id ? true : false,
  });

  const funktown = function () {
    changeGarden(id);

    if (selected !== id) {
      setSelected(id);
    } else {
      setSelected(null);
      updateGardenVegetableState();
    }
  };

  return (
    <Card className={gardenClass} onClick={funktown}>
      <Typography variant="body2" color="text.secondary" className="card-body">
        {garden_name}
      </Typography>
    </Card>
  );
}

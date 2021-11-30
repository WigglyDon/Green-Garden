import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import Button from "@mui/material/Button";

// garden find = select all gardens where userid = 1
export default function GardenSelector(props: any) {
  const [gardenState, setGardenState] = useState("");
  const [vegetableState, setVegetableState] = useState(null);

  const gardenId = gardenState;
  const vegetableId = vegetableState;
  const { handleAddVegetable, state } = props;
  // const {state} = props.state;
  // eslint-disable-next-line
  const { selectedGarden } = props.selectedGarden;
  // console.log("selected garden", props.selectedGarden)

  // console.log("State in GardenSelector", state);

  const gardens = state.gardens;
  // const gardens = [1, 2, 3];

  // const handleSubmit = () => {
  //   console.log("garden and vegetable state", gardenState, vegetableState)
  //   axios
  //       .post("http://localhost:8080/api/gardensvegetables", {
  //         gardenId,
  //         vegetableId,
  //       })
  //       .then(function (response) {
  //         console.log(response)
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //       alert("posted to database")

  // }

  const handleChange = (event: SelectChangeEvent) => {
    setVegetableState(props.currentVegetableId);
    setGardenState(event.target.value);
    console.log({ gardenState }, { vegetableState });
  };

  const mapList = (listGardens: any) => {
    let listItems = [];

    for (let i = 0; i < listGardens.length; i++) {
      const gardenName = listGardens[i].name;
      const gardenId = listGardens[i].id;
      listItems.push(
        <MenuItem value={gardenId} key={listGardens[i].id}>
          {gardenName}
        </MenuItem>
      );
    }
    return listItems;
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Selected Garden</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedGarden}
            label="selectedGarden"
            onChange={handleChange}
          >
            {mapList(gardens)}
          </Select>
        </FormControl>
      </Box>
      <Button onClick={() => handleAddVegetable(gardenId, vegetableId)}>
        Submit
      </Button>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import Button from "@mui/material/Button";

const DeleteDropDown = function (props: any) {
  const { state, deleteGardenVegetable } = props;
  const [vegetableID, setVegetableID] = useState("");

  const gardensVegetables = state.gardensVegetables;
  const gardenID = state.garden;

  console.log("state in ddd", state);

  const handleChange = (event: SelectChangeEvent) => {
    setVegetableID(event.target.value);
  };

  const mapList = (listGardenVegetables: any) => {
    let listItems = [];

    for (let i = 0; i < listGardenVegetables.length; i++) {
      const vegetableName = listGardenVegetables[i].name;
      listItems.push(
        <MenuItem value={gardenID} key={listGardenVegetables[i].id}>
          {vegetableName}
        </MenuItem>
      );
    }
    return listItems;
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Selected Vegetable
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={vegetableID}
            label="selectedGarden"
            onChange={handleChange}
          >
            {mapList(gardensVegetables)}
          </Select>
        </FormControl>
      </Box>
      <Button onClick={() => console.log("form")}>Submit</Button>
    </div>
  );
};

export default DeleteDropDown;

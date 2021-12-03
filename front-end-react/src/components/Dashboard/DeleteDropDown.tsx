import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";

const DeleteDropDown = function (props: any) {
  const { state, deleteGardenVegetable } = props;
  const [vegetableName, setVegetableName] = useState("");
  const [vegetableID, setVegetableID] = useState(null);

  const gardensVegetables = state.gardensVegetables;
  const gardenID = state.garden;

  console.log("state in ddd", state);

  const handleChange = (event: SelectChangeEvent) => {
    console.log("even.target.value", event.target.value);
    setVegetableName(event.target.value);
  };

  useEffect(() => {
    for (let vegetable of gardensVegetables) {
      if (vegetable.name === vegetableName) {
        setVegetableID(vegetable.id);
      }
    }
  }, [vegetableName]);

  const mapList = (listGardenVegetables: any) => {
    let listItems = [];
    for (let i = 0; i < listGardenVegetables.length; i++) {
      const vegetableName = listGardenVegetables[i].name;
      listItems.push(
        <MenuItem
          value={vegetableName}
          key={listGardenVegetables[i].vegetable_id}
        >
          {vegetableName}
        </MenuItem>
      );
    }
    return listItems;
  };

  return (
    <div className="delete-vegetable">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Delete Vegetable
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={vegetableName}
            label="selectedGarden"
            onChange={handleChange}
          >
            {mapList(gardensVegetables)}
          </Select>
        </FormControl>
      </Box>
      <Button
        className="danger-btn"
        onClick={() => deleteGardenVegetable(gardenID, vegetableID)}
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteDropDown;

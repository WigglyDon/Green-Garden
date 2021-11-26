import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios'


// garden find = select all gardens where userid = 1
export default function GardenSelector(props:any) {

  const {state} = props.state;
  const {selectedGarden, setSelectedGarden} = props.selectedGarden
  console.log("selected garden", props.selectedGarden)

  const gardens = state.gardens;


  const handleChange = (event: SelectChangeEvent) => {
    // setSelectedGarden(event.target.value as string);
    console.log("CLICK ACTION", state)

   
      const gardenId = event.target.value
      const vegetableId = props.currentVegetableId

      console.log({vegetableId})

      axios
        .post("http://localhost:8080/api/gardensvegetables", {
          gardenId,
          vegetableId,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  
  };

  const mapList = (listGardens:any) => {
    let listItems = [];
    

    for (let i = 0; i < listGardens.length; i++) {
      const gardenName = listGardens[i].name;
      const gardenId = listGardens[i].id;
      listItems.push( <MenuItem value={gardenId} key={listGardens[i].id}>{gardenName}</MenuItem>) 
    }
    return listItems
  }


  return (
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
  );
}
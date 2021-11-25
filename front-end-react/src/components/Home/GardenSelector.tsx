import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


// garden find = select all gardens where userid = 1
export default function GardenSelector(props:any) {
  const [age, setAge] = React.useState('');
  const {state} = props.state;

  const gardens = state.gardens;


  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const mapList = (listGardens:any) => {
    let listItems = [];
    

    for (let i = 0; i < listGardens.length; i++) {
      const gardenName = listGardens[i].name;
      listItems.push( <MenuItem value={listGardens[i].id} key={listGardens[i].id}>{gardenName}</MenuItem>) 
    }
    return listItems
  }


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
        {mapList(gardens)}
        </Select>
      </FormControl>
    </Box>
  );
}
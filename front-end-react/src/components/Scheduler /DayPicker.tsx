import React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";

export default function DayPicker(props: any) {
  const { handleDayChange } = props;
  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Choose your day(s)</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={handleDayChange} name="0" />}
          label="Sunday"
        />
        <FormControlLabel
          control={<Switch onChange={handleDayChange} name="1" />}
          label="Monday"
        />
        <FormControlLabel
          control={<Switch onChange={handleDayChange} name="2" />}
          label="Tuesday"
        />
        <FormControlLabel
          control={<Switch onChange={handleDayChange} name="3" />}
          label="Wednesday"
        />
        <FormControlLabel
          control={<Switch onChange={handleDayChange} name="4" />}
          label="Thursday"
        />
        <FormControlLabel
          control={<Switch onChange={handleDayChange} name="5" />}
          label="Friday"
        />
        <FormControlLabel
          control={<Switch onChange={handleDayChange} name="6" />}
          label="Saturday"
        />
      </FormGroup>
    </FormControl>
  );
}

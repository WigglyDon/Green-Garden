import React, { useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";

export default function DayPicker(props: any) {
 const { state, handleChange } = props
  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Choose your day(s)</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.sunday}
              onChange={handleChange}
              name="sunday"
            />
          }
          label="Sunday"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.monday}
              onChange={handleChange}
              name="monday"
            />
          }
          label="Monday"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.tuesday}
              onChange={handleChange}
              name="tuesday"
            />
          }
          label="Tuesday"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.wednesday}
              onChange={handleChange}
              name="wednesday"
            />
          }
          label="Wednesday"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.thursday}
              onChange={handleChange}
              name="thursday"
            />
          }
          label="Thursday"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.friday}
              onChange={handleChange}
              name="friday"
            />
          }
          label="Friday"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.saturday}
              onChange={handleChange}
              name="saturday"
            />
          }
          label="Saturday"
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
}

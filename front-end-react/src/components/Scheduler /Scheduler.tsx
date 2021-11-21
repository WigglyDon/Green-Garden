import React from "react";
import ReactDOM from "react-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button } from "@mui/material";
import DayPicker from "./DayPicker";
import TimePicker from "./TimePicker";

export default function Scheduler(props: any) {
  const { state, handleChange, handleTime} = props
  
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DayPicker 
        state = {state}
        handleChange = {handleChange} />
        <TimePicker 
          state={state}
          handleTime = {handleTime}
        />
        <Button
          variant="contained"
           onClick={() => {
             alert('clicked');
             console.log("state:", state)
            }}
        > Save Appointment</Button>
      </LocalizationProvider>
    </div>
  );
}

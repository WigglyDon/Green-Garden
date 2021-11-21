import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticTimePicker from "@mui/lab/StaticTimePicker";
import { Button } from "@mui/material";

export default function TimePicker(props:any) {
  // const [value, setValue] = useState<Date | null>(new Date());
const {state, handleTime} = props
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticTimePicker
          ampm
          orientation="landscape"
          openTo="minutes"
          value={state.time}
          onChange={(newTime) => { 
            handleTime(newTime)}}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

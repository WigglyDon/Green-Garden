import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticTimePicker from "@mui/lab/StaticTimePicker";
import { useContext } from "react";
import { stateContext } from "../../providers/StateProvider";

export default function TimePicker() {
  const { handleTime } = useContext(stateContext);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticTimePicker
          orientation="landscape"
          openTo="minutes"
          value={""}
          onChange={(newTime) => {
            handleTime(newTime);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

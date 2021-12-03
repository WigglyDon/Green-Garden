import React from "react";
import TextField from "@mui/material/TextField";
import StaticTimePicker from "@mui/lab/StaticTimePicker";

export default function TimePicker(props: any) {
  const { handleTime } = props;
  return (
    <div>
      <StaticTimePicker
        orientation="landscape"
        openTo="minutes"
        value={Number}
        onChange={(newTime) => {
          handleTime(newTime);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
}

import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticTimePicker from "@mui/lab/StaticTimePicker";
// import { fr } from "date-fns/locale";

export default function TimePicker(props: any) {
  // const [value, setValue] = useState<Date | null>(new Date());
  const { handleTime } = props;
  return (
    <div>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
      <StaticTimePicker
        orientation="landscape"
        openTo="minutes"
        value={Number}
        onChange={(newTime) => {
          handleTime(newTime);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      {/* </LocalizationProvider> */}
    </div>
  );
}

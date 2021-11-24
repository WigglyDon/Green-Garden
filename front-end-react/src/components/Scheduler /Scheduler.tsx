import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button } from "@mui/material";
import DayPicker from "./DayPicker";
import TimePicker from "./TimePicker";
import { useContext } from "react";
import { stateContext } from "../../providers/StateProvider";

export default function Scheduler() {
  const { state, bookNotification } = useContext(stateContext);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DayPicker />
        <TimePicker />
        <Button
          variant="contained"
          onClick={() => {
            bookNotification(state.notificationFormData);
          }}
        >
          Save Notification
        </Button>
      </LocalizationProvider>
    </div>
  );
}

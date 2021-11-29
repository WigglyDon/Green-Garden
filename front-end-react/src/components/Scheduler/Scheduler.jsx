import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button } from "@mui/material";
import DayPicker from "./DayPicker";
import TimePicker from "./TimePicker";
import "./Scheduler.scss";
import swal from "sweetalert";

export default function Scheduler(props: any) {
  const {
    state,
    handleDayChange,
    handleTime,
    bookNotification,
    setShowNotifications,
  } = props;

  return (
    <div className="scheduler-layout">
      <div className="picker-layout">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="daypicker-layout">
            <DayPicker state={state} handleDayChange={handleDayChange} />
          </div>
          <div className="timepicker-layout">
            <div className="notifications-title">
              Schedule Water Notification
            </div>
            <TimePicker state={state} handleTime={handleTime} />
          </div>
        </LocalizationProvider>
      </div>
      <div className="scheduler-button-layout">
        <Button
          className="confirm-btn"
          variant="contained"
          onClick={() => {
            bookNotification(state?.notificationFormData, state.garden);
            setShowNotifications(false);
            swal("Saved Notfication", {
              button: false,
              icon: "success",
              timer: 1000,
            });
          }}
        >
          Save Notification
        </Button>
        <Button
          className="danger-btn"
          onClick={() => {
            setShowNotifications(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

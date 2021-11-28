import React from "react";
import { Button } from "@mui/material";
import DeleteForm from "./Dashboard/DeleteForm";
import Scheduler from "./Scheduler/Scheduler";
import { useState } from "react";

export default function GardenOptions(props: any) {
  const {
    state,
    showNotifications,
    showDelete,
    setShowDelete,
    setShowNotifications,
  } = props;

  const notificationsHandler = () => {
    setShowNotifications(!showNotifications);
  };

  const deleteGardenForm = () => {
    setShowDelete(!showDelete);
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          deleteGardenForm();
        }}
      >
        Delete Garden
      </Button>
      {showDelete ? <DeleteForm state={state} /> : null}
      <Button
        variant="contained"
        onClick={() => {
          notificationsHandler();
        }}
      >
        Set Notifications
      </Button>
      {showNotifications ? <Scheduler /> : null}
    </div>
  );
}

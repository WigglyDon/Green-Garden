import React, { useState } from "react";
import { Button } from "@mui/material";
import { render } from "@testing-library/react";

const DeleteForm = function (props: any) {
  const { state, deleteGarden, cancelForm, updateGardenState } = props;
  console.log("state in deleteform", state.garden);
  const gardenID = state.garden;

  return (
    <main className="form">
      <section className="delete-form">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          Are you sure?
        </form>
        <Button
          className="save-button"
          onClick={() => {
            deleteGarden(gardenID);
            cancelForm();
            updateGardenState();
          }}
        >
          Yes
        </Button>
        <Button
          className="cancel-button"
          onClick={() => {
            cancelForm();
          }}
        >
          No
        </Button>
      </section>
    </main>
  );
};

export default DeleteForm;

import React, { useState } from "react";
import { Button } from "@mui/material";
import { render } from "@testing-library/react";

const DeleteForm = function (props: any) {
  const { state, deleteGarden, cancelForm, updateGardenState } = props;
  console.log("state in deleteform", state.garden);
  const gardenID = state.garden;

  return (
    <div className='delete-modal'>
      <main className="form">
        <section className="delete-form">
          <div className='delete-from-title'>
            Are you sure you want to delete this garden?

          </div>
          <div className='delete-buttons'>
            <Button
              className="danger-btn"
              variant="contained"
              onClick={() => {
                deleteGarden(gardenID);
                cancelForm();
                updateGardenState();
              }}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              className="cancel-btn"
              onClick={() => {
                cancelForm();
              }}
            >
              Cancel
            </Button>
          </div>
        </section>
      </main>
    </div>

  );
};

export default DeleteForm;

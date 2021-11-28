import React, { useState } from "react";
import { Button } from "@mui/material";
import { render } from "@testing-library/react";

const DeleteForm = function (props: any) {
  const { state } = props;
  console.log("state in deleteform", state.garden);

  return (
    <main className="form">
      <section className="delete-form">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          Are you sure?
        </form>
        <Button className="save-button" onClick={() => {}}>
          Yes
        </Button>
        <Button className="cancel-button" onClick={() => {}}>
          No
        </Button>
      </section>
    </main>
  );
};

export default DeleteForm;

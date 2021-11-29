import React, { useState } from "react";
import { Button } from "@mui/material";
// eslint-disable-next-line
import { render } from "@testing-library/react";

const Form = function (props: any) {
  // eslint-disable-next-line
  const { createGarden, state, setAddButton } = props;
  // eslint-disable-next-line
  const [error, setError] = useState("");

  const [garden, setGarden] = useState("");

  const newGarden = {
    name: { garden },
  };

  const reset = () => {
    setGarden("");
    setAddButton(true);
  };

  function validate() {
    if (garden === "") {
      setError("Garden name cannot be black");
      return;
    }
    setError("");
    createGarden(newGarden);
    setAddButton(true);

    setGarden("");
  }

  return (
    <main className="garden-form">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="garden-name-input"
            name="name"
            type="text"
            placeholder="Enter Your Garden Name"
            value={garden}
            onChange={(event) => setGarden(event.target.value)}
          />
        </form>
        <Button className="save-button" onClick={validate}>
          Save
        </Button>
        <Button className="cancel-button" onClick={reset}>
          Cancel
        </Button>
      </section>
    </main>
  );
};

export default Form;

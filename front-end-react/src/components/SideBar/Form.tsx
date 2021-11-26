import React, { useState } from 'react';
import { Button } from '@mui/material';
// eslint-disable-next-line
import { render } from '@testing-library/react';

const Form = function (props: any) {
  // eslint-disable-next-line
  const { createGarden, state, setAddButton } = props;
  // eslint-disable-next-line
  const [error, setError] = useState("");


  const [garden, setGarden] = useState("")
  const [region, setRegion] = useState("")
  const [imageUrl, setImageUrl] = useState("")

// eslint-disable-next-line
  const [selectedFile, setSelectedFile] = useState(null)


  const newGarden = {
    name: { garden },
    region: { region },
    image: { imageUrl }
  }


  const reset = () => {
    setGarden('');
  }

  function validate() {
    if (garden === "") {
      setError("Garden name cannot be black");
      return;
    }
    setError("");
    createGarden(newGarden);
    setAddButton(true);
  //  updateGardenState();

    setGarden('')
  }


  const fileSelectedHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  }



  return (
    <main className="form">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="garden-name-input"
            name="name"
            type="text"
            placeholder="Enter Your Garden Name"
            value={garden}
            onChange={(event) => setGarden(event.target.value)}
          />
          <input
            className="garden-region"
            name="region"
            type="text"
            placeholder="Garden Region"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
          />
          <input
            className="garden-image"
            name="image"
            type="text"
            placeholder="Garden Image Url"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />

          <input type="file" onChange={fileSelectedHandler} />

        </form>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button className='save-button' onClick={validate}>Save</Button>
          <Button className='cancel-button' onClick={reset}>Cancel</Button>
        </section>
      </section>
    </main>
  );
}

export default Form;


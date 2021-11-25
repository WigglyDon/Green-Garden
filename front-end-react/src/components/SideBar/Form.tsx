import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const Form = function (props: any) {
    console.log('PROPS', props)
    const { createGarden } = props
    const [error, setError] = useState("");

    const [garden, setGarden] = useState("")
    const [region, setRegion] = useState("")
    const [imageUrl, setImageUrl] = useState("")


    const [selectedFile, setSelectedFile] = useState(null)
    const newGarden = {
        name: { garden },
        region: { region },
        image: { imageUrl }
    }

    console.log(newGarden)

    const reset = () => {
        setGarden('');
    }

    function validate() {
        if (garden === "") {
            setError("Student name cannot be blank");
            return;
        }
        setError("");

        console.log('NG', newGarden)

        createGarden(newGarden)
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
                    <Button onClick={reset}>Cancel</Button>
                    <Button onClick={validate}>Save</Button>
                </section>
            </section>
        </main>
    );
}

export default Form;


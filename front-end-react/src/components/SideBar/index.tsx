import React from "react";
import GardenCardList from "../Dashboard/GardenCardList";
import Empty from "./Empty";
import Form from "./Form";
import { useState } from "react";
import GardenVegetableList from "./GardenVegetablesList";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = function (props: any) {
  const {
    state,
    createGarden,
    changeGarden,
    updateGardenState,
    updateGardenVegetableState,
  } = props;
  const [addButton, setAddButton] = useState(true);
  const [gardenID, setGardenID] = useState(null);

  //set state which id gets displayed

  return (
    <article className="sidebarItems">
      <FontAwesomeIcon className="faSeedling dashboard" icon={faSeedling} />
      <h2>My Gardens</h2>
      <hr />
      <GardenCardList
        updateGardenVegetableState={updateGardenVegetableState}
        state={state}
        changeGarden={changeGarden}
      />
      <div
        className="add"
        onClick={() => {
          setAddButton(false);
        }}
      >
        {addButton ? <Empty /> : null}
      </div>
      {!addButton ? (
        <Form
          state={state}
          createGarden={createGarden}
          setAddButton={setAddButton}
        />
      ) : null}
    </article>
  );
};

export default Sidebar;

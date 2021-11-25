import React from "react";
import GardenCardList from "../Dashboard/GardenCardList";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import { useState } from "react";

const Sidebar = function (props: any) {
  const { state, createGarden } = props;

  const [addButton, setAddButton] = useState(true);

  console.log(addButton);



  // const deleteInterview = () => {
  //     transition(DELETING);
  //     cancelInterview(id)
  //         .then(() => {
  //             transition(EMPTY);
  //         })
  //         .catch(() => {
  //             transition(ERROR_DELETE, true)
  //         })
  // }

  return (
    <article className="sidebarItems">
      <img className='logo' src="https://raw.githubusercontent.com/nikolajjuuel/scheduler/master/public/images/lhl.png" alt="" />
      <h2>My Gardens</h2>
      <hr />
      <GardenCardList state={state.gardens} />

      {/* setting state and passing props to components */}
      {/* {mode === SHOW && <Show student={interview.student} interviewer={interview.interviewer.name}
                onDelete={() => transition(CONFIRMING)}
                onEdit={() => transition(EDIT)} />}
            {mode === EMPTY && <Empty onAdd={() => { transition(CREATE) }} />}
            {mode === CREATE && <Form onCancel={back} onSave={save} interviewers={allInterviewers} />}
            {mode === SAVING && <Status message="Saving" />}
            {mode === DELETING && <Status message="Deleting" />}
            {mode === CONFIRMING && <Confirm onConfirm={deleteInterview} onCancel={back} />}
            {mode === EDIT && <Form interviewers={allInterviewers} onCancel={back} onSave={save} student={interview.student} interviewer={interview.interviewer.id} />}
            {mode === ERROR_SAVE && <Error message="Could not save appointment." onClose={back} />}
            {mode === ERROR_DELETE && <Error message="Could not save appointment." onClose={() => transition(SHOW)} />} */}

      <div className='add' onClick={() => { setAddButton(false) }}>
        {addButton ? <Empty /> : null}
      </div>
      {!addButton ? <Form state={state} createGarden={createGarden}/> : null}


    </article>
  );
}

export default Sidebar;
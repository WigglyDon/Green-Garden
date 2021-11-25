import React from "react";
import GardenCardList from "../Dashboard/GardenCardList";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
// const CREATE = "CREATE";
// const SAVING = "SAVING";
// const DELETING = "DELETING";
// const CONFIRMING = "CONFIRMING";
// const EDIT = "EDIT";
// const ERROR_SAVE = "ERROR SAVE";
// const ERROR_DELETE = "ERROR DELETE";


const Sidebar = function (props: any) {
  const { state, createGarden } = props;
  // const { id, bookInterview, cancelInterview, interview, allInterviewers, time } = props

  // const { mode, transition, back } = useVisualMode(
  //     interview ? SHOW : EMPTY
  // );

  // const save = (name, interviewer) => {
  //     const interview = {
  //         student: name,
  //         interviewer
  //     }
  //     transition(SAVING);
  //     bookInterview(id, interview)
  //         .then(() => transition(SHOW))
  //         //if TRUE goes back 2 states 
  //         .catch(() => { 
  //             transition(ERROR_SAVE, true)
  //         })
  // }

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
      <Empty />
      <Form state={state}
        createGarden={createGarden}
      />

    </article>
  );
}

export default Sidebar;
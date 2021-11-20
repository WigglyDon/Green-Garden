import "./App.css";
import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

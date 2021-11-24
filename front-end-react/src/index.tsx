import React from "react";
import ReactDOM from "react-dom";
import Application from "./components/Application";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StateProvider from "./providers/StateProvider.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <Application />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

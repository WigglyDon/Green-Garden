import * as React from "react";
import { Button } from "@mui/material";
import "./Logout.scss";

export default function Logout() {
  const handleClick = () => {
    localStorage.removeItem("email");
  };

  return (
    <div className="logout-button">
      <Button
        variant="text"
        onClick={() => {
          handleClick();
        }}
      >
        Logout
      </Button>
    </div>
  );
}

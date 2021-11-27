import * as React from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import "./Logout.scss";

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <div className="page">
      <div>You have successfully logged out!</div>
      <Button
        variant="contained"
        onClick={() => {
          handleClick();
        }}
      >
        Return to Home Page
      </Button>
    </div>
  );
}

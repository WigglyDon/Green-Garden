import * as React from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import "./Logout.scss";
import Nav from './Nav'

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <div className='login-out'>
      <Nav  />
      <div className='login-form out'>
        <div className="page">
          <div className='bye-text'>See you next time!</div>
          <Button
            className='login-btn'
            variant="contained"
            onClick={() => {
              handleClick();
            }}
          >
            Return to Home Page
          </Button>
        </div>
      </div>
      <div className='login-image'>
      </div>
    </div>




  );
}

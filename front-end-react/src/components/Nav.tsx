import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {
  const [email, setEmail] = useState(localStorage?.getItem("email"));

  useEffect(() => {
    setEmail(email);
  }, [email]);

  return (
    <div className="nav-layout">
      <div className="nav-logo">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <FontAwesomeIcon className='faSeedling' icon={faSeedling} />
          Green Garden
        </NavLink>
      </div>
      <div className="nav-links">
        {email ? (
          <>
            <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
              My Gardens
            </NavLink>
            <NavLink to="/logout" style={{ textDecoration: "none" }}>
              Logout
            </NavLink>
          </>
        ) : (
          <Button variant="text">
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              Login
            </NavLink>
          </Button>
        )}
      </div>
    </div>
  );
}

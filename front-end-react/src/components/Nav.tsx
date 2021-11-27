import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect } from "react";

export default function Nav() {
  // const userEmail = localStorage?.getItem("email");
  const [email, setEmail] = useState(localStorage?.getItem("email"));

  useEffect(() => {
    setEmail(email);
  }, [email]);

  return (
    <div className="nav-layout">
      <div className="nav-logo">
        <NavLink to="/">What to grow?</NavLink>
      </div>
      <div className="nav-links">
        {console.log({ email })}
        {email ? (
          <>
            <NavLink to="/dashboard">My Gardens</NavLink> <a href="/">Logout</a>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
}

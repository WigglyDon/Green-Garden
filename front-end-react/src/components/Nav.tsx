import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect } from "react";

export default function Nav(props: any) {
  const { state } = props;
  const userState = state.users[0];
  const loggedIn = userState?.auth;
  console.log("state in nav", state);
  console.log("loggedIn", loggedIn);

  const [navLogIn, setNavLogin] = useState(loggedIn);
  useEffect(() => {
    setNavLogin(loggedIn);
  }, [loggedIn]);

  console.log("navLogIn", navLogIn);
  return (
    <div className="nav-layout">
      <div className="nav-logo">
        <NavLink to="/">What to Grow?</NavLink>
      </div>
      <div className="nav-links">
        {/* {console.log({ navLogIn })} */}
        {loggedIn ? (
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

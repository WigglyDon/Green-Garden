import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export default function Nav(props: any) {
  const { state } = props;
  const userAuthState = state.users[0];
  const loggedIn = userAuthState?.auth;
  console.log("state in nav", state);

  return (
    <div className="nav-layout">
      <div className="nav-logo">
        <NavLink to="/">What to Grow?</NavLink>
      </div>
      <div className="nav-links">
        {loggedIn && <NavLink to="/dashboard">My Gardens</NavLink>}
        {loggedIn && <NavLink to="/logout">Logout</NavLink>}
        {!loggedIn && <NavLink to="/login">Login</NavLink>}
      </div>
    </div>
  );
}

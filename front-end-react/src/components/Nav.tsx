import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav(props: any) {
  const { state } = props;
  const userAuthState = state.users[0];
  const loggedIn = userAuthState?.auth;
  console.log("state in nav", state);
  console.log("userAuthState", userAuthState);
  return (
    <div className="nav-layout">
      <div className="nav-logo">
        <Link to="/">What to Grow?</Link>
      </div>
      <div className="nav-links">
        {/* <Link to="/dashboard">My Gardens</Link>
        <Link to="/login">Login</Link> */}
        {loggedIn && <Link to="/dashboard">My Gardens</Link> && (
          <Link to="/logout">Logout</Link>
        )}
        {!loggedIn && <Link to="/login">Login</Link>}
      </div>
    </div>
  );
}

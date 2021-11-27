import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <div className="nav-layout">
      <div className="nav-logo">
        <NavLink to="/">What to grow?</NavLink>
      </div>
      <div className="nav-links">
        {/* <Link to="/dashboard">My Garden</Link> | <Link to="/login">Login</Link> */}
        {true ? (
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

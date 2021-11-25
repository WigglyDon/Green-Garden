import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <div className="nav-layout">
      <div className="nav-logo">
        <Link to="/">What to grow?</Link>
      </div>
      <div className="nav-links">
        <Link to="/dashboard">My Garden</Link> | <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

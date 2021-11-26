import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav(props: any) {
  const { state } = props;

  return (
    <div className="nav-layout">
      <div className="nav-logo">
        <Link to="/">What to Grow?</Link>
      </div>
      <div className="nav-links">
        <Link to="/dashboard">My Gardens</Link> | <Link to="/">Logout</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

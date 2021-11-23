import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div>What to grow?</div>
      <nav>
        <Link to="/dashboard">My Garden</Link> | <Link to="/login">Login</Link>
      </nav>
      I'm a nav.
    </div>
  );
}

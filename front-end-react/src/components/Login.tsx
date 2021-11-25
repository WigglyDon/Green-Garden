import React from "react";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login-layout">
      <form>
        <div className="container">
          <label>
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

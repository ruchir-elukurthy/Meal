import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="form_layout">
      <form className="form_interior">
        <h2 className="login">Login page</h2>
        <br />
        <br />
        <input type="text" placeholder="Username" className="username" />
        <br />
        <input type="password" placeholder="Password" className="username" />
        <br /> <br />
        <ul>
          <Link to="/Homepage" className="submit">
            Sign In
          </Link>
        </ul>
      </form>
    </div>
  );
}

export default Login;

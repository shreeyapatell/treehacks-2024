import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <ul>
        <h1><a href="/">🛝 memory playground</a></h1>
        <li>
          <Link to="/">🏠 home</Link>
        </li>
        <li>
          <Link to="/about">🌎 about</Link>
        </li>
        <li>
          <Link to="/instructions">✏️ how to use</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
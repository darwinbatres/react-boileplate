import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/home" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/feature1" exact>
          Feature 1
        </NavLink>
      </li>
      <li>
        <NavLink to="/feature2" exact>
          Feature 2
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const Nav = () => {
  const { user, logout } = React.useContext(AuthContext);

  return (
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
        {user && (
          <button type="button" onClick={logout}>
            Logout
          </button>
        )}
      </ul>
    </div>
  );
};

export default Nav;

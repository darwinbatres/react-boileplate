import React, { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

const initialState = {
  user: null
};

if (localStorage.getItem("jwtToken")) {
  try {
    const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("jwtToken");
    } else {
      initialState.user = decodedToken;
    }
  } catch (error) {
    localStorage.removeItem("jwtToken");
  }
}

const AuthContext = createContext({
  user: null,
  login: userData => {},
  logout: () => {}
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(userData) {
    localStorage.setItem("jwtToken", userData.token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
    dispatch({
      type: "LOGIN",
      payload: userData
    });
  }

  function logout() {
    localStorage.removeItem("jwtToken");
    axios.defaults.headers.common["Authorization"] = "";
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };

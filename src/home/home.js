/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import useDataApi from "../api";
import { AuthContext } from "../shared/context/auth.context";

const Home = () => {
  const { login } = React.useContext(AuthContext);
  const [{ data, isLoading, isError }, setLoginRequest] = useDataApi({});

  // request data has to be what the backend will need to work
  // we only need to provide certain part of the resource URI since the rest is being done at the
  // axios defaults level
  const handleLogin = () => {
    setLoginRequest({
      method: "POST",
      requestData: { username: "username", password: "pass123" },
      resourceUri: "/v1/users/login"
    });
  };

  React.useEffect(() => {
    // <data> will contain the whole response object, including http status: 200. 500, etc
    // this way we can do some logic here if needed
    if (data && data.data && data.data.data) {
      login(data.data.data);
    }
  }, [data]);

  return (
    <div>
      <p>Hello from Home component</p>
      <button onClick={handleLogin}>Login</button>
      {isError && <p>error was found</p>}
      {isLoading && <p>information loading right now...</p>}
    </div>
  );
};

export default Home;

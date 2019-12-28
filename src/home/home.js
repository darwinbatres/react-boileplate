import React from "react";

import useDataApi from "../api";

const Home = () => {
  const [{ data, isLoading, isError }, doLogin] = useDataApi({});

  const [tokenOrUserInfo, setTokenOrUserInfo] = React.useState("");

  const login = () => {
    doLogin({
      method: "post",
      requestData: { username: "user", password: "pass123" },
      resourceUri: "/v1/users/login"
    });
  };

  React.useEffect(() => {
    if (data.token) {
      setTokenOrUserInfo(data.token);
    }
  }, [data]);

  return (
    <div>
      <p>Hello from Home component</p>
      <button onClick={login}>Login</button>
      {isError && <p>error was found</p>}
      {isLoading && <p>information loading right now...</p>}
      {tokenOrUserInfo && <p>{JSON.stringify(tokenOrUserInfo, null, 4)}</p>}
    </div>
  );
};

export default Home;

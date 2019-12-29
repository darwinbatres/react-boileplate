/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import useDataApi from "../../api";

const Component1 = () => {
  const [{ data, isLoading, isError }, setLoginRequest] = useDataApi({});

  const [links, setLinks] = React.useState([]);

  React.useEffect(() => {
    setLoginRequest({ method: "get", resourceUri: "/v1/links" });
  }, []);

  React.useEffect(() => {
    // data this way embedded since this is the form of the response, nothing to do with the client
    if (data && data.data && data.data.data) {
      setLinks(data.data.data.links);
    }
  }, [data]);

  return (
    <div>
      <p>Hello from Component1 component</p>
      {isLoading && <p>loading links...</p>}
      {isError && <p>oops, there was an error while loading links...</p>}
      {links.map(link => (
        <p key={link._id}>{JSON.stringify(link, null, 4)}</p>
      ))}
    </div>
  );
};

export default Component1;

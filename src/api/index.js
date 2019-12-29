import React from "react";
import axios from "axios";

const useDataApi = initialData => {
  const [data, setData] = React.useState(initialData);
  const [requestInfo, setRequestInfo] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const { method, requestData, resourceUri } = requestInfo;
      let result;

      if (!method) {
        return;
      }

      setIsError(false);
      setIsLoading(true);

      try {
        switch (method.toUpperCase()) {
          case "GET":
          case "POST":
          case "PUT":
          case "PATCH":
          case "DELETE":
            result = await axios[method.toLowerCase()](
              resourceUri,
              requestData
            );
            break;

          default:
            result = { data: {} };
            break;
        }

        // set response data
        setData(result);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [requestInfo]);

  return [{ data, isLoading, isError }, setRequestInfo];
};

export default useDataApi;

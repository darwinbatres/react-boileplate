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
            result = await axios.get(resourceUri, requestData);
            break;

          case "POST":
            result = await axios.post(resourceUri, requestData);
            break;

          default:
            result = { data: {} };
            break;
        }

        setData(result.data.data);
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

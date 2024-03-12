import { useState, useEffect } from "react";

const useApiFetch = (url, id = null) => {
  const baseUrl = "https://v2.api.noroff.dev/online-shop";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = id ? `${baseUrl}/${id}` : baseUrl;
        const response = await fetch(url);
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, id]);
  return { data, loading, error };
};

export default useApiFetch;

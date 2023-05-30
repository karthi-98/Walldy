import { useState, useEffect } from "react";

const ACCESS_KEY = process.env.ACCESS_KEY.trim();

const useFetch = (pageNo) => {
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(null);
  const [data, setData] = useState();
  const fetchData = async () => {
    setisLoading(true);

    try {
      const res = await fetch(
        `https://api.unsplash.com/photos?page=${pageNo}&client_id=${ACCESS_KEY}`
      );

      const data = await res.json();
      if (data) {
        setData(data);
      } else {
        setisError("Something Went Wrong !");
      }
    } catch (error) {
      setisError(error);
      console.log("Error");
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, isError, data };
};

export default useFetch;

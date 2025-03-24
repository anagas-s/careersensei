import React from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = React.useState(undefined);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fn, setData };
};

export default useFetch;

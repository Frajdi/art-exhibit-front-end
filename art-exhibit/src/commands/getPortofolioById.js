import { useState } from "react";
import axios from "axios";

const usePortofolioById = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPortofolioById = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/portfolio/getByArtist/${id}`
      );
      setData(response.data);
      setError(null);
    } catch (err) {
      if (err.response.data.details) {
        setError(err.response.data.details);
      } else {
        setError(err.response.data.error);
      }
      setData(null);
    }
    setIsLoading(false);
  };

  return { data, error, isLoading, getPortofolioById };
};

export default usePortofolioById;

import { useState } from 'react';
import axios from 'axios';

const useGetArtists = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getArtists = async (page = 0, size = 10) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/artist/findAll?page=${page}&size=${size}`);
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

  return { data, error, isLoading, getArtists };
};

export default useGetArtists;

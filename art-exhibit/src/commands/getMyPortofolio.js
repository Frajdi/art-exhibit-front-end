import { useState } from 'react';
import axios from 'axios';

const useGetMyPortofolio = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getMyPortofolio = async (accessToken) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/portfolio/get`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the token in the Authorization header
        },
      });

      // Access the response status code
      const statusCode = response.status;

      if (statusCode === 1004) {
        setData(false);
      } else {
        setData(response.data);
      }
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

  return { data, error, isLoading, getMyPortofolio };
};

export default useGetMyPortofolio;

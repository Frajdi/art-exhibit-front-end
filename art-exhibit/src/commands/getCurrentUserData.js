import { useState } from 'react';
import axios from 'axios';

const useGetCurrentUserData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRequest = async (accessToken) => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/auth/get', {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the token in the Authorization header
        },
      });
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.response.data.details);
      setData(null);
    }
    setIsLoading(false);
  };

  return { data, error, isLoading, getRequest };
};

export default useGetCurrentUserData;

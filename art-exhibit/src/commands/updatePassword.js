import { useState } from 'react';
import axios from 'axios';

const useUpdatePassword = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updatePassword = async (accessToken, requestBody) => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/auth/change-password', requestBody, {
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

  return { data, error, isLoading, updatePassword };
};

export default useUpdatePassword;

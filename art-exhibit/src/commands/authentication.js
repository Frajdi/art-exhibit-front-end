import { useState } from 'react';
import axios from 'axios';

const useAuthenticate = (context) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const postRequest = async (postData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`http://localhost:8080/auth/${context}`, postData);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.response.data.details);
      setData(null);
    }
    setIsLoading(false);
  };

  return { data, error, isLoading, postRequest };
};

export default useAuthenticate

import { useState } from 'react';
import axios from 'axios';

const useGetNotifications = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getNotifications = async (page = 0, size = 20) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/notification/findAll?page=${page}&size=${size}`);
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

  return { data, error, isLoading, getNotifications };
};

export default useGetNotifications;
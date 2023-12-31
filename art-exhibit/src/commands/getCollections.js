import { useState } from 'react';
import axios from 'axios';

const useGetCollections = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = async (accessToken) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/collectors/get`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },
      });
      setData(response.data);
      setError(null);
    } catch (err) {
      if(err.response.data.details){
        setError(err.response.data.details);
      }else{
        setError(err.response.data.error)
      }
      setData(null);
    }
    setIsLoading(false);
  };

  return { data, error, isLoading, getCollection };
};

export default useGetCollections
